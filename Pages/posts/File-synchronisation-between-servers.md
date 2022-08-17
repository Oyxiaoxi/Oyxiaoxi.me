---
title: 'File synchronisation between servers'
date: 2019-08-19T09:00:00Z
draft: false
lang: en
type: notes
duration: Read · 1min
description: File synchronisation between servers。
---

```bash
# 查看服务器系统版本
cat /proc/version 

# 下载 syncthing
wget https://github.com/syncthing/syncthing/releases/download/v0.14.5/syncthing-linux-amd64-v0.14.5.tar.gz

# 解压
cd ~
tar xzvf syncthing-linux-amd64-v0.14.5
cd syncthing-linux-amd64-v0.14.51
./syncthing

# 修改配置文件，让其可远程访问
vim /root/.config/syncthing/config.xml

<gui enabled="true" tls="false" debugging="false">
    <address>127.0.0.1:8384</address>
    <user>administrator</user>
    <password>$2a$10$OGJCfTrVPHDmPwrBQHxubuaKyXvd6233rnPnuIQ9GCbNWxp5DiMMu</password>
    <apikey>xhgYWNrtQTjQe6jXAiioWWgZYxXKRSPn</apikey>
    <theme>default</theme>
</gui>

# 将 127.0.0.1:8384 修改为 0.0.0.0:8384
<address>127.0.0.1:8384</address>

# 放行 8384 端口 (注意：如若是阿里云的服务器需要填加例外规则)
/sbin/iptables -I INPUT -p tcp --dport 8384 -j ACCEPT
/etc/init.d/iptables save
service iptables restart

# bin
cp syncthing /usr/local/bin

# 后台执行
which syncthing 
nohup syncthing & 或者 nohup /usr/local/binsyncthing
```
