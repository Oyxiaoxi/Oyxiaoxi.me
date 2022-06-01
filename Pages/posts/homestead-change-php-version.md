---
title: 'Homestead Change PhP Version'
date: 2022-04-02T18:00:00Z
draft: false
lang: zh
type: notes
duration: Read · 1min
description: Homestead Change PhP Version。
---

<ClientOnly>
  <Firefly/>
</ClientOnly>

Laravel 环境
```bash
# 更新 vagrant box 盒子
vagrant box update --force
```

切换 PHP 版本
```bash
# 查看所有 php 版本和当前使用版本
update-alternatives --display php
# 执行后，会列出当前 php 所有版本和编号，输入编号，切换到执行的版本
update-alternatives --config php  
```

Homestead 目录下有个 aliases 文件，文件中定义了一些可以直接在虚拟机中使用的命令
```bash
php81 # 切换到 php 8.1.0
php -v # php 版本
php -i # 当前 php 使用配置
```
