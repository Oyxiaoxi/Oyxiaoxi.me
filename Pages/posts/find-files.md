---
title: 'Flush MAC Dns cache'
date: 2019-08-19T09:00:00Z
draft: false
lang: en
duration: Read · 1min
description: Flush MAC Dns cache。
plum: true
---

[[toc]]

```bash
sudo dscacheutil -flushcache
# 配合 nslookup
nslookup www.github.com
```
