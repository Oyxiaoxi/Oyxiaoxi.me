---
title: 'Iptables Block User IP'
date: 2017-03-06T09:00:00Z
draft: false
lang: zh
type: notes
duration: Read · 1min
description: Forced Cross Domain。
---

[[toc]]

```bash
# 封单个 IP
iptables -I INPUT -s 124.115.0.199 -j DROP
# 封 IP 段后二位
iptables -I INPUT -s 124.115.0.0/16 -j DROP　
# 封整个 IP 段后三位
iptables -I INPUT -s 194.42.0.0/8 -j DROP　
# 封 IP 段后一位
iptables -I INPUT -s 61.37.80.0/24 -j DROP　
# 只封 80 端口
iptables -I INPUT -p tcp –dport 80 -s 124.115.0.0/24 -j DROP
# 列出屏蔽 Ip 条目
iptables -L INPUT --line-numbers
# 解封
iptables -F
# 清空
iptables -D INPUT 数字
# 列出 INPUT 链所有的规则
iptables -L INPUT --line-numbers
# 保存
service iptables save
# 重启 iptables 服务
service iptables restart
```
