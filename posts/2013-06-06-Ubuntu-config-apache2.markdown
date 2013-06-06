---
layout: post
title: "Ubuntu下apache2的配置记录"
date: 2013-06-06 21:41
comments: true
categories: notes
---

自从2012年四月买VPS...到现在已经算是一年多了吧.在此感谢琴对我的帮助和指导.没有琴的指导我也不会折腾和配置VPS.
期间一点一点的成长都离不开大家的帮助.不过对琴的过度依赖,使我一度成为伸手党...真是十分抱歉 QAQ 
现在写一篇日志记录下apache2的配置方法也可以留着自己以后进行参考.

#安装apache套装
首先安装lamp
sudo apt-get install lamp-server^    
PHP开发和服务器运行环境首选LAMP组合，即Linux+Apache+Mysql+Php/Perl/Python，能最优化服务器性能

#开启相关模块
启用 mod_rewrite 模块  
sudo a2enmod rewrite  
启用 SSL 模块  
sudo a2enmod ssl  
a2xx系列的命令共有a2dismod、a2enmod、a2dissite、a2ensite，作用分别是禁用模块、启用模块、停用站点、启用站点这些命令简单得连--help选项都没有，只能运行看提示。其作用也很简单，就是在/etc/apache2/mods-enabled和/etc/apache2/sites-enabled里面建立或删除相对应的x-available目录里面的模块的链接。

#具体相关配置
服务器资源一般很高贵,大家都会挂很多独立站点的.apache2默认存放网站的目录是 /var/www 
配置文件储存在 /etc/apache2 主配置文件在 apache2.conf 其中这个配置文件包含了 sites-enabled 目录
这个目录是主要储存配置文件的地方 配置文件以 000-default 000-default-ssl 这种命名方式进行命名.
这两个文件是对http 和 https 进行默认配置.下面我们来看看这两个默认配置
vim 000-default

	<VirtualHost *:80>
	ServerAdmin acgotaku311@email.me
        ServerName _default_
	DocumentRoot /var/www/default
	<Directory />
		Options FollowSymLinks
		AllowOverride None
	</Directory>
	<Directory /var/www/default>
		Options Indexes FollowSymLinks MultiViews
		AllowOverride None
		Order allow,deny
		allow from all
	</Directory>

	ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/
	<Directory "/usr/lib/cgi-bin">
		AllowOverride None
		Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
		Order allow,deny
		Allow from all
	</Directory>

	ErrorLog ${APACHE_LOG_DIR}/error.log

	# Possible values include: debug, info, notice, warn, error, crit,
	# alert, emerg.
	LogLevel warn

	CustomLog ${APACHE_LOG_DIR}/access.log combined

    Alias /doc/ "/usr/share/doc/"
    <Directory "/usr/share/doc/">
        Options Indexes MultiViews FollowSymLinks
        AllowOverride None
        Order deny,allow
        Deny from all
        Allow from 127.0.0.0/255.0.0.0 ::1/128
    </Directory>

	</VirtualHost>

第一行指定的是服务使用的端口
第二行 ServerAdmin 写的是服务器管理员的邮箱
第三行 ServerName 写的是服务器的名字 _default_ 代表默认使用这个即服务器名字找不到对应的配置文件时时候此配置文件
第四行 DocumentRoot 写的是网站的根目录,即输入网址映射到服务器具体的哪个站点
Directory子节点是对具体目录进行配置 我们主要是对网站根目录进行权限的配置
其中主要说明的是 AllowOverride 选项 AllowOverride控制那些被放置在.htaccess文件中的指令
其余的配置基本不需要关心.

vim 000-default-ssl

	<IfModule mod_ssl.c>
	<VirtualHost *:443>
	ServerAdmin acgotaku311@email.me
        ServerName  _default_
	DocumentRoot /var/www/default
	<Directory />
		Options FollowSymLinks
		AllowOverride None
	</Directory>
	<Directory /var/www/default>
		Options Indexes FollowSymLinks MultiViews
		AllowOverride All
		Order allow,deny
		allow from all
	</Directory>

	ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/
	<Directory "/usr/lib/cgi-bin">
		AllowOverride None
		Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
		Order allow,deny
		Allow from all
	</Directory>

	ErrorLog ${APACHE_LOG_DIR}/error.log

	# Possible values include: debug, info, notice, warn, error, crit,
	# alert, emerg.
	LogLevel warn

	CustomLog ${APACHE_LOG_DIR}/ssl_access.log combined

	Alias /doc/ "/usr/share/doc/"
	<Directory "/usr/share/doc/">
		Options Indexes MultiViews FollowSymLinks
		AllowOverride None
		Order deny,allow
		Deny from all
		Allow from 127.0.0.0/255.0.0.0 ::1/128
	</Directory>

	#   SSL Engine Switch:
	#   Enable/Disable SSL for this virtual host.
	SSLEngine on

	SSLCertificateFile    /etc/apache2/ssl/ssl.crt
	SSLCertificateKeyFile /etc/apache2/ssl/ssl.key

	
	<FilesMatch "\.(cgi|shtml|phtml|php)$">
		SSLOptions +StdEnvVars
	</FilesMatch>
	<Directory /usr/lib/cgi-bin>
		SSLOptions +StdEnvVars
	</Directory>

	BrowserMatch "MSIE [17-9]" ssl-unclean-shutdown

	</VirtualHost>
	</IfModule>

SSL模块就是多了一个证书的设置  其余的基本不变.

其它站点基本就是拷贝默认的配置文件修改 ServerName 和 DocumentRoot 即可.

#关于SSL证书
生成 SSl证书命令
openssl genrsa -des3 -out ssl.key 1024  
然后他会要求你输入这个key文件的密码。不推荐输入。 但是生成时候必须输入密码。你可以输入后 再删掉。 
mv ssl.key xxx.key  
openssl rsa -in xxx.key -out ssl.key  
rm xxx.key  
然后根据这个key文件生成证书请求文件  
openssl req -new -key ssl.key -out ssl.csr  
以上命令生成时候要填很多东西 一个个看着写吧（可以随便，毕竟这是自己生成的证书）
最后根据这2个文件生成crt证书文件  
openssl x509 -req -days 365 -in ssl.csr -signkey ssl.key -out ssl.crt  
这里365是证书有效期 推荐3650哈哈。这个大家随意。最后使用到的文件是key和crt文件。

这里生成的证书是不受信任的...我们可以在[StartSSL(http://www.startssl.com/)上
申请免费的证书.不过免费时间是一年,并且只能对根域名和一个子域名生效.不过一年后可以重新
注册,所以可以永远对根域名和一个子域名设置受信任的SSl证书.
相关的申请教程在此[点我](http://www.deepvps.com/apply-startssl-ssl-certificate.html)

