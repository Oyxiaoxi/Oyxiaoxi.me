---
title: 'GitHub SSH Connect'
date: 2023-05-11T23:00:00Z
draft: false
lang: zh
duration: Read · 7min
description: GitHub SSH Connect。
plum: true
---

[[toc]]

#### 原因

当我更换电脑设备重新 `Clone` GitHub 项目到本地时，修改完代码，`git push -u origin master` 时，提示我没有提交权限。

#### SSH 密钥

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

> 注意：如果你使用的是不支持 Ed25519 算法的旧系统，请使用以下命令：

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

#### 添加 ssh-agent

```bash
eval "$(ssh-agent -s)"
```

```bash
touch ~/.ssh/config
```

```bash
Host github.com
# 如果 ssh -T github.com 测试报 Bad configuration option: usekeychain 错误，就增加 ` IgnoreUnknown UseKeychain`
IgnoreUnknown UseKeychain
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
```

```bash
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

然后将你的 `id_ed25519.pub` 增加到 `GitHub` SSH keys 中

#### 测试

```bash
ssh -T gihtub.com

Hi xxxx! You've successfully authenticated, but GitHub does not provide shell access.
```

#### Tips

如果你是用 https `Clone` 的项目，那在提交时会遇到 `invalid username or password`，这时候就重装设置一下仓库 URL

```bash
git remote set-url origin git@github.com:username/repository
```
