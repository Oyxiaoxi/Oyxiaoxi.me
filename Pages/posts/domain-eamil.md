---
title: 'Domain Email'
date: 2020-06-05T13:29:00Z
draft: false
lang: en
duration: Read · 2min
description: Domain Name Custom Mailboxes。
plum: true
---

[[toc]]

## The cause

> How to have a short and nice email address?

I got interested in having a short and nice email address. My current one in Hotmail is just too long to even being spell out in talk. [hey.com](https://www.hey.com/)   looks very nice but $99/year is not a very good deal to me. I decide to use my own domain for receiving emails.

## Search

With this in mind, I started searching for E-mail Free On Github, And found [Forward Email - Free](https://github.com/forwardemail) in the search results.

## The solution

The DNS forwarding feature just works the same, but it requires you to log in and register your domain now.

The config is quite simple as usual, just 3 DNS record:

| Host Records   | Type of record  | Recorded values           | MX Record Priority | TTL |
| -------------- | --------------- | ------------------------- | ------------------ | --- |
| @              | MX              | mx1.forwardemail.net      | 10                 | 600 |
| @              | MX              | mx2.forwardemail.net      | 20                 | 600 |
| @              | TXT             | forward-email=youremail@example.com |          | 600 |

That’s it! It also provides some advanced configs, you can check [the doc here](https://forwardemail.net/en/faq), For more details pleases see [How do I get started and set up email forwarding](https://forwardemail.net/en/faq#lazyframe-MEheS8gM4Xs)

And now, you can say hi to me at [hi@oyxiaoxi.me](mailto:hi@oyxiaoxi.me)!
