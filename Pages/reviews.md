---
title: Reviews - Oyxiaoxi
display: Reviews
subtitle: Some comments from friends
description: Some comments from friends
comments:
  - name: 'Calvin'
    desc: '晓锡做事有geek精神，善于钻研，性格稍显固执，专一，尽量融入集体，有时爱钻牛角尖。'
    imageUrl: './public/friends/calvin.png'
  - name: 'Lin'
    desc: '为人处事低调，感性技术大佬。'
    imageUrl: './public/friends/Lin.png'
  - name: 'C'
    desc: 'Sincere'
    imageUrl: './public/friends/Chen.png'
  - name: 'Sun'
    desc: '是个技术大牛，出去玩发的朋友圈照片也很棒，人很细心，在群里聊天的时候，有时候有人说话没人接茬，你总是出来说话，感觉很温暖，对老婆也很好，作为未曾谋面的网友，给我们寄过几次水果，很认真的把我们当朋友，我有时候有啥动态的时候，你也总是私信关心，就很棒！'
    imageUrl: './public/friends/Sun.png'
  - name: 'Yang'
    desc: '一个温柔的男人，在开发技术方面是个大牛； 在游戏玩家中也是优秀的好伙伴； 在生活中也是一个喜欢分享的好朋友； 总得来说就是非常温柔、热爱生活的人儿吧。'
    imageUrl: './public/friends/Yang.png'
  - name: 'Liu'
    desc: '低调多金的有志青年，对人对事都以认真、真诚的态度，时常也会耍一些小幽默，喜欢摄影，对新鲜事物充满着探索好奇之心，是个小果粉。'
    imageUrl: './public/friends/Liu.png'
  - name: 'Man'
    desc: '关于晓锡，挺有趣的是我们是在设计师群里结识的，很久以后大家才知道他本行是开发者，很多外行喜欢在嘴上谈设计，还是比较少人愿意更深入的接触到设计师群体。
          很长时间里以为他的言语和声音是个小正太的形象，大家视频之后我觉得自己见过的人太少了哈哈😂。
          尽管如此，在见不着面的群里，大家还是当他是个小正太来对待吧。有一点冲动，有一点情绪，有让大家羡慕的生活，也有大家感受不到的压力…也许是我身边这样的朋友太少，有点像飘在空中的木棉花，松软、易碎，抓不住，不知道从哪飘来的，又能在一些时刻感动到你。'
    imageUrl: './public/friends/xiaoman.png'
  - name: 'Li'
    desc: '脾气有点大，需改正，气大伤身!
          性格开朗，继续保持! 待人真诚友善，值得发扬光大，以后也要这样教育下一代! 
          为人不卑不亢，比较中正! 
          遇事有点悲观，应该敞开心扉，向他人倾诉! 
          爱吃，不爱睡，爱学习、不爱运动、爱干净、不爱劳动，少吃多动，少玩多睡，注意减肥，身体才能健康! 
          是个好孩子，好朋友，好男朋友，以后也会是个有责任的好爸爸! 
          善良的小朋友，希望你能勇敢追求自己想要的，不要瞻前顾后，考虑太多往往会失去很多机会，过去的事情不要想太多，往前看，加油!'
    imageUrl: './public/friends/Li.png'
---

<ClientOnly>
  <Firefly/>
</ClientOnly>

<ListReviews :comments="frontmatter.comments"/>
