import{_ as n,o as s,c as e,S as p}from"./chunks/framework.D1Ss-Xl7.js";const m=JSON.parse('{"title":"使用Aria2下载百度网盘和115的资源","description":"虽然我已经开发了两款专门为 Aria2 用的下载插件,但是我发现还是有同学不会用 Aria2c 这么好的东西呢~\\n于是还是写一篇文章来好好的介绍下吧~","frontmatter":{"title":"使用Aria2下载百度网盘和115的资源","date":"2015-1-31 09:41","comments":true,"archives":2015,"tags":["notes"]},"headers":[],"relativePath":"posts/2015-01-31-aria2-download/index.md","filePath":"posts/2015/2015-01-31-Aria2-download.md"}'),l={name:"posts/2015-01-31-aria2-download/index.md"};function r(i,a,c,t,o,b){return s(),e("div",null,[...a[0]||(a[0]=[p(`<p>虽然我已经开发了两款专门为 Aria2 用的下载插件,但是我发现还是有同学不会用 Aria2c 这么好的东西呢~ 于是还是写一篇文章来好好的介绍下吧~</p><h2 id="安装-aria2" tabindex="-1">安装 Aria2 <a class="header-anchor" href="#安装-aria2" aria-label="Permalink to &quot;安装 Aria2&quot;">​</a></h2><p><a href="http://aria2.sourceforge.net/" target="_blank" rel="noreferrer">Aria2 官网</a>,通过官网应该能找到各个系统的下载包啦~ Linux 用户可以直接通过包管理器进行下载安装,OSX 我就没有经验了...Win 用户直接下载对应的 ZIP 包就可以了</p><h2 id="配置-aria2" tabindex="-1">配置 Aria2 <a class="header-anchor" href="#配置-aria2" aria-label="Permalink to &quot;配置 Aria2&quot;">​</a></h2><p>Aria2 有两种下载模式,一种是命令行下载模式,一种是 RPC Server 模式.前者不建议使用,后者的使用方式很方便. RPC 模式就是启动之后什么也不做,等着通过 RPC 接口接受下载请求.下载完也不会退出,一直等待. 使用命令行加参数的方式配置 Aria2 非常不推荐,建议使用配置文件的方式,下面贴出我的配置文件.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span>#用户名</span></span>
<span class="line"><span>#rpc-user=user</span></span>
<span class="line"><span>#密码</span></span>
<span class="line"><span>#rpc-passwd=passwd</span></span>
<span class="line"><span>#上面的认证方式不建议使用,建议使用下面的token方式</span></span>
<span class="line"><span>#设置加密的密钥</span></span>
<span class="line"><span>#rpc-secret=token</span></span>
<span class="line"><span>#允许rpc</span></span>
<span class="line"><span>enable-rpc=true</span></span>
<span class="line"><span>#允许所有来源, web界面跨域权限需要</span></span>
<span class="line"><span>rpc-allow-origin-all=true</span></span>
<span class="line"><span>#允许外部访问，false的话只监听本地端口</span></span>
<span class="line"><span>rpc-listen-all=true</span></span>
<span class="line"><span>#RPC端口, 仅当默认端口被占用时修改</span></span>
<span class="line"><span>#rpc-listen-port=6800</span></span>
<span class="line"><span>#最大同时下载数(任务数), 路由建议值: 3</span></span>
<span class="line"><span>max-concurrent-downloads=5</span></span>
<span class="line"><span>#断点续传</span></span>
<span class="line"><span>continue=true</span></span>
<span class="line"><span>#同服务器连接数</span></span>
<span class="line"><span>max-connection-per-server=5</span></span>
<span class="line"><span>#最小文件分片大小, 下载线程数上限取决于能分出多少片, 对于小文件重要</span></span>
<span class="line"><span>min-split-size=10M</span></span>
<span class="line"><span>#单文件最大线程数, 路由建议值: 5</span></span>
<span class="line"><span>split=10</span></span>
<span class="line"><span>#下载速度限制</span></span>
<span class="line"><span>max-overall-download-limit=0</span></span>
<span class="line"><span>#单文件速度限制</span></span>
<span class="line"><span>max-download-limit=0</span></span>
<span class="line"><span>#上传速度限制</span></span>
<span class="line"><span>max-overall-upload-limit=0</span></span>
<span class="line"><span>#单文件速度限制</span></span>
<span class="line"><span>max-upload-limit=0</span></span>
<span class="line"><span>#断开速度过慢的连接</span></span>
<span class="line"><span>#lowest-speed-limit=0</span></span>
<span class="line"><span>#验证用，需要1.16.1之后的release版本</span></span>
<span class="line"><span>#referer=*</span></span>
<span class="line"><span>#文件保存路径, 默认为当前启动位置</span></span>
<span class="line"><span>dir=/home/acgotaku/Downloads</span></span>
<span class="line"><span>#文件缓存, 使用内置的文件缓存, 如果你不相信Linux内核文件缓存和磁盘内置缓存时使用, 需要1.16及以上版本</span></span>
<span class="line"><span>#disk-cache=0</span></span>
<span class="line"><span>#另一种Linux文件缓存方式, 使用前确保您使用的内核支持此选项, 需要1.15及以上版本(?)</span></span>
<span class="line"><span>#enable-mmap=true</span></span>
<span class="line"><span>#文件预分配, 能有效降低文件碎片, 提高磁盘性能. 缺点是预分配时间较长</span></span>
<span class="line"><span>#所需时间 none &lt; falloc ? trunc &lt;&lt; prealloc, falloc和trunc需要文件系统和内核支持</span></span>
<span class="line"><span>file-allocation=prealloc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>小白用户可以直接 copy 我的配置文件保存成 aria2.conf 进行使用.<br> 然后在终端里面输入 <code>aria2c --conf-path=&lt;PATH&gt;</code> 注意 PATH 必须是绝对路径.<br> 例如: <code>D:\\aria2\\aria2.conf</code> 可以使用 <code>-D</code> 参数使 Aria2 在后台运行,即使关闭终端也不会停止运行. Win 下可以把这个命令行保存成 bat 文件进行运行.注意路径不需要使用引号括起来.</p><p>接下来是如何管理 Aria2 的下载任务了,推荐使用 binux 菊苣的<a href="http://binux.github.io/yaaw/" target="_blank" rel="noreferrer">YAAW</a>,超级好用,下载打开即用.<br> 懒得下载的话可以使用<a href="http://binux.github.io/yaaw/demo/" target="_blank" rel="noreferrer">在线版</a>,只需在设置里面修改下 RPC PATH 为 <code>http://localhost:6800/jsonrpc</code></p><h2 id="百度网盘插件" tabindex="-1">百度网盘插件 <a class="header-anchor" href="#百度网盘插件" aria-label="Permalink to &quot;百度网盘插件&quot;">​</a></h2><p>我开发的百度网盘插件已经发布到<a href="http://goo.gl/bPpaAS" target="_blank" rel="noreferrer">Web Store</a>了,无法翻墙的同学可以去<a href="https://github.com/acgotaku/BaiduExporter/releases" target="_blank" rel="noreferrer">Github</a>下载安装包进行安装.安装之后打开<a href="http://pan.baidu.com/disk/home" target="_blank" rel="noreferrer">百度网盘</a>会发现在我的设备按钮的 右侧多了一个导出下载按钮,如果你使用的是默认配置的话那么选中要下载的文件之后点击<code>ARIA2 RPC</code>即可导出到 Aria2 进行下载,前提是你已经开启了 Aria2 的 RPC 模式.</p><h2 id="_115-网盘插件" tabindex="-1">115 网盘插件 <a class="header-anchor" href="#_115-网盘插件" aria-label="Permalink to &quot;115 网盘插件&quot;">​</a></h2><p><a href="https://chrome.google.com/webstore/detail/115exporter/ojafklbojgenkohhdgdjeaepnbjffdjf" target="_blank" rel="noreferrer">115 网盘插件</a>刚刚发布功能还不完善,可能还有未知的 BUG,我后续会进行优化和开发的.安装之后打开<a href="http://115.com/?mode=wangpan" target="_blank" rel="noreferrer">115 网盘</a>, 会发现多了一个 <code>设置导出按钮</code> 的按钮.点击这个按钮之后会提示设置成功的,然后把鼠标移动到要下载的文件上会出现 <code>导出下载</code> 的按钮, 点击即可导出到 Aria2 下载.</p><p>参考: <a href="http://blog.binux.me/2012/12/aria2-examples/" target="_blank" rel="noreferrer">Aria2 下载示例</a></p><p>如果有不懂的可以在<a href="https://github.com/acgotaku" target="_blank" rel="noreferrer">Github</a>和<a href="https://plus.google.com/u/0/+%E9%9B%AA%E6%9C%88%E7%A7%8B%E6%B0%B4%E9%85%B1/posts" target="_blank" rel="noreferrer">Google+</a>上联系我~</p>`,14)])])}const d=n(l,[["render",r]]);export{m as __pageData,d as default};
