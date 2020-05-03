---
title: Windows下如何进行进程注入
date: 2015-2-28 15:53
comments: true
archives: 2015
tags:
	- notes
---

上学期学了有关 Windows 程序底层方面的知识，学习到病毒的基本工作原理。好记性不如烂笔头，学完之余还是写点东西出来吧～
不过我也只是抛砖引玉，详细知识还是得自己多多钻研～

## 首先打开进程

首先使用 Win 系统的[OpenProcess](<https://msdn.microsoft.com/en-us/library/windows/desktop/ms684320(v=vs.85).aspx>)API 打开所要注入的进程。
使用参数是进程的 PID，可以使用任务管理器查看进程的 PID，打开成功之后返回程序的句柄。

## 开辟内存空间

Win 系统也提供了开辟内存空间的[VirtualAllocEx](<https://msdn.microsoft.com/en-us/library/windows/desktop/aa366890(v=vs.85).aspx>)API。
传入的参数包括进程句柄，开辟起始地址，开辟空间的大小，分配的数据类型，分配空间的权限。例如： `pRemoteCode = (PBYTE) VirtualAllocEx(hProcess, 0, dwSizeOfCode, MEM_COMMIT, PAGE_EXECUTE_READWRITE);`

## 写入恶意代码

使用 Win 系统的[WriteProcessMemory](<https://msdn.microsoft.com/en-us/library/windows/desktop/ms681674(v=vs.85).aspx>)API 向新开辟的内存空间写入数据。注意这里写入的是二进制数据，要考虑到各种 API 函数的寻址问题。

## 执行注入的代码

微软照样还是提供了相关的[CreateRemoteThread](<https://msdn.microsoft.com/en-us/library/windows/desktop/ms682437(v=vs.85).aspx>)API，我们注意最后一个参数是输出而不是输入。

## 获取执行的结果

如果要获取执行的结果，首先我们得等待线程的执行完成，使用[WaitForSingleObject](<https://msdn.microsoft.com/en-us/library/windows/desktop/ms687032(v=vs.85).aspx>)API.例： `WaitForSingleObject(hThread, INFINITE);`
然后再使用[GetExitCodeThread](<https://msdn.microsoft.com/en-us/library/windows/desktop/ms683190(v=vs.85).aspx>)API，得到返回的结果。

## 释放开辟的空间

干了坏事得不留痕迹才行，回收自己开辟的空间，使用[VirtualFreeEx](<https://msdn.microsoft.com/en-us/library/windows/desktop/aa366894(v=vs.85).aspx>)API.

## 关闭打开的进程

打开的进程也得关闭，使用[CloseHandle](<https://msdn.microsoft.com/en-us/library/windows/desktop/ms724211(v=vs.85).aspx>)API.

代码示例：

```cpp
hProcess = OpenProcess(PROCESS_CREATE_THREAD
		| PROCESS_QUERY_INFORMATION
		| PROCESS_VM_OPERATION
		| PROCESS_VM_WRITE
		| PROCESS_VM_READ,
		FALSE, PID);

if (hProcess == NULL) {
		printf("failed.\n");
		return -1;
}
printf("ok.\n");

printf("[I]: Allocating remote memory with size of 0x%08x ......",
		dwSizeOfCode);

pCodeRemote = (PBYTE) VirtualAllocEx(hProcess,
				0,
				dwSizeOfCode,
				MEM_COMMIT,
				PAGE_EXECUTE_READWRITE);
if (pCodeRemote == NULL) {
		printf("failed.\n");
		CloseHandle(hProcess);
		return -1;
}
printf("ok at 0x%08x.\n", pCodeRemote);

do_link_before_inj(pCodeRemote);

printf("[I]: Writing code ......");
if (WriteProcessMemory(hProcess,
				pCodeRemote,
				pCode,
				dwSizeOfCode,
				&dwNumBytesXferred) == 0) {
		printf("failed.\n");
		VirtualFreeEx(hProcess, pCodeRemote,
						dwSizeOfCode, MEM_RELEASE);
		CloseHandle(hProcess);
		return -1;
};
printf("ok (%d bytes were written).\n", dwNumBytesXferred);

printf("[I]: Creating a remote thread ......");
hThread = CreateRemoteThread(hProcess, NULL, 0,
				(LPTHREAD_START_ROUTINE) pCodeRemote,
				pCodeRemote, 0 , &dwThreadId);
if (hThread == 0) {
		printf("failed.\n");
		if ( pCodeRemote != 0 )
				VirtualFreeEx(hProcess, pCodeRemote, 0, MEM_RELEASE);
		if ( hThread != 0 )
				CloseHandle(hThread);
		return -1;
}
printf("ok.\n");

printf("[I]: Waiting the remote thread ......");
WaitForSingleObject(hThread, INFINITE);
GetExitCodeThread(hThread, (PDWORD) &exitcode);
printf("exited with 0x%08X\n", exitcode);

VirtualFreeEx(hProcess, pCodeRemote, 0, MEM_RELEASE);
CloseHandle(hProcess);
```
