---
title: 'MidJourney'
date: 2023-04-22T14:07:00Z
draft: false
lang: zh
duration: Read · 15min
description: MidJourney
plum: true
---

[[toc]]

### MidJourney

> [文档](https://docs.midjourney.com/docs/quick-start)

Midjourney 是一款 AI 制图工具，只要关键字，就能透过 AI 算法生成相对应的图片，只需要不到一分钟。可以选择不同画家的艺术风格，例如安迪华荷、达芬奇、达利和毕加索等，还能识别特定镜头或摄影术语。

### How to Use ?

在 MidJoyney 中，一段完整的绘图指令包括：绘图命令、图像链接、文本提示词、绘图参数等。

| 绘图命令 | 图像链接 | 文本提示词 | 绘图参数 |
| :------: | :------: | :--------: | :------: |
| /imagine | Https……  | A Cute Cat |  --v 5   |

完整的命令行示例：

```shell
/imagine prompt https://cdn.midjourney.com/7495c376-1bfa-4336-aa74-dd2c54a5ab23/0_0.png D render, oc render, best quality, 8k, bright, front lighting, Face shot, fine lustre, mockup blind box toy Anime/Manga style --q 2 --v 5 --s 750
```

#### 1.文本提示词的书写要求

1. 文本长度  
   - 一个**单词**，甚至**表情符号**都可以生成一张图
   - **集中笔墨用于修饰**你想要绘制的主题

2. 标点符号  
   - 使用**逗号**，括号和**连字符**帮助组织内容
3. 语法
   - 不理解语法，句子结构，不区分大小写
   - **内容顺序**很重要，越靠前的单词越受重视
   - **更具体的同义词效果更好**
   - **单词越少**，每个单词的影响效果就越大
4. 内容组成
   - 不要出现你不想要的内容，例如：A party with no cake, 这样的描述可能会在绘图过程中出现 Cake，尽量使用参数 --no 来禁用
   - 忽略的内容可能会被随机生成

5. 文本提示词包括哪些
   - **主题描述** + **风格特点**
   - 主题：人物、动物、角色、位置、物体等
   - 风格：媒介、环境、灯光、颜色、氛围、构图等

#### 2.绘图参数的作用机理

|  参数名   |               解释               |                       备注                       |
| :-------: | :------------------------------: | :----------------------------------------------: |
| --version |             使用版本             |                   --v 4、--v 5                   |
|  --style  |             使用风格             |              Disney、Studio Ghibil               |
| --aspect  |       设置绘图时的宽高比例       |                                                  |
|  --seed   |         生成图的种子 ID          |                    1829959492                    |
|  --chaos  |         添加一些随机噪声         |                让绘图看起来更有趣                |
|    ::     | 用于分隔输入文件和输出文件的参数 |                                                  |
|   --no    |        禁用某些功能或选项        |                                                  |
| --quality |          设置绘图的质量          | 以便在输出文件中实现更高的分辨率和更好的图像质量 |
| --stylize |         应用风格转移算法         |        将图像转换为具有不同艺术风格的版本        |
|  --stop   |         在绘制过程中暂停         |           以便更改参数或查看绘图的进度           |
|  --title  |          设置绘图的标题          |                                                  |
|  --video  |         生成一个视频文件         |            显示绘图从开始到结束的过程            |

#### 3.图像作为提示词的重点

如何绘制图片中相似的人物、图片要素组

#### 4.重要的绘图命令

|  命令名  |                        解释                        |                             备注                             |
| :------: | :------------------------------------------------: | :----------------------------------------------------------: |
|  /info   |           显示当前 Midjourney 绘图的信息           |                 包括绘图的参数、状态、进度等                 |
| /setting |           显示当前 Midjourney 绘图的设置           |             包括绘图的宽高比例、颜色、线条粗细等             |
| /imagine |        用于随机生成一张新的 Midjourney 绘图        |         每次使用 /imagine 命令都会生成一张不同的绘图         |
|  /blend  |   用于将当前 Midjourney 绘图与另一张绘图进行混合   |        使用 --ratio 参数来控制两张绘图之间的混合比例         |
|  /fast   |         用于加速 Midjourney 绘图的绘制速度         |         禁用绘制过程中的计算和检查，从而加快绘制速度         |
|  /realx  |     用于将 Midjourney 绘图的绘制速度调整到最慢     |                      绘图更加精细和准确                      |
|  /remix  | 用于将当前 Midjourney 绘图与之前的某个绘图进行混合 | 使用 --id 参数来指定之前的绘图的 ID 号，使用 --ratio 参数来控制两张绘图之间的混合比例 |

### Example

<figure>
  <img src="https://cdn.midjourney.com/7495c376-1bfa-4336-aa74-dd2c54a5ab23/0_0.png" alt="Girl" />
  <figcaption>小女孩</figcaption>
</figure>

看上面我生成的这个小女孩，完整的修饰词如下：

```shell
A girl, bright, front lighting, Face shot, fine lustre, mockup blind box toy Anime/Manga style,D render, oc render, best quality, 8k --q 2 --v 5 --s 750
```

如下这段命令是告诉 MidJourney  需要绘制的人物及风格

```shell
bright, front lighting, Face shot, fine lustre, mockup blind box toy Anime/Manga style
```

如下这段命令是告诉 MidJourney 需要渲染人物的方式、质量、大小、绘图版本、绘图参数

```shell
D render, oc render, best quality, 8k --q 2 --v 5 --s 750
```

### Recommend

推荐几个关键词绘画提示词网站

1. [AIGC 提示词可视化编辑器](https://moonvy.com/apps/ops/)
1. [PromptoMania](https://promptomania.com/)
1. [Midjourney Prompt Helper](https://prompt.noonshot.com/)
1. [大神收集整理的文档](https://qefvars1f2.feishu.cn/sheets/shtcnSNmDlnJgmQkCRjGUw1w15g)

### Invite

如果你也很心动，想要测试 MidJourney 绘画，请发邮件给我你的 DisCord ID [<span i-clarity-email-solid/> hi@oyxiaoxi.me](mailto:hi@oyxiaoxi.me), 我会邀请你加入我的 MidJourney 服务器。
