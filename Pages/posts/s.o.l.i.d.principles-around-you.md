---
title: 'S.O.L.I.D. Principles Around You'
date: 2021-07-02T17:05:00Z
draft: false
lang: en
duration: Read · 5min
description: S.O.L.I.D. Principles Around You。
plum: true
---

[[toc]]

![SOLID](//cdn.3333120.com/article/solid/0qazxkim2uf50lnwjkhx.png)

In this article, I want to briefly go through [SOLID](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)) principles (the acronym that stands for five basic principles of object-oriented programming and design) supplying each of them with real-world visual examples to make those principles more understandable, readable and memorizable.

> If you want to see code examples instead you may take a look at variety of tree data structure implementations in JavaScript like Binary Search Tree, AVL Tree, Red-Black Tree, Segment Tree or Fenwick Tree.

So let’s move on!

## S — Single Responsibility Principle

[a.k.a [SRP](https://en.wikipedia.org/wiki/Single_responsibility_principle)] A class should have only a single responsibility. Only one potential change in the software’s specification should be able to affect the specification of the class.

![S](//cdn.3333120.com/article/solid/xabfs57cezxegih8uh2f.png)

## O — Open/Closed Principle

[a.k.a [OCP](https://en.wikipedia.org/wiki/Open/closed_principle)] Software entities should be open for EXTENSION, but closed for MODIFICATION. Allow behavior to be extended without modifying the source code.

![O](//cdn.3333120.com/article/solid/fv3xpd9kkfgntqby9eg6.png)

## L — Liskov Substitution Principle

[a.k.a. [LSP](https://en.wikipedia.org/wiki/Liskov_substitution_principle)] Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.

![L](//cdn.3333120.com/article/solid/7wdzib8lqfq9bcstfqu3.png)

## I — Interface Segregation Principle

[a.k.a. [ISP](https://en.wikipedia.org/wiki/Interface_segregation_principle)] Many client-specific interfaces are better than one general-purpose interface. No client should be forced to depend on methods it does not use.

![I](//cdn.3333120.com/article/solid/rnwds5cv5qcodlam1wc6.png)

## D — Dependency Inversion Principle

[a.k.a. [DIP](https://en.wikipedia.org/wiki/Dependency_inversion_principle)] One should depend upon abstractions, not concretions.

- High-level modules should not depend on low-level modules. Both should depend on abstractions.
- Abstractions should not depend on details. Details should depend on abstractions.

![D](//cdn.3333120.com/article/solid/wugaxuqznqow3wzgp8hr.png)

The plug doesn’t care which type of wire it uses, it just needs wires that conduct electricity.

I hope these illustrations have been useful for you :)
