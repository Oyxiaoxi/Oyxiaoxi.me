---
title: 'Github Copilot'
date: 2022-03-30T16:00:00Z
draft: false
lang: en
duration: Read · 7min
description: Github Copilot。
plum: true
---

[[toc]]

Your AI pair programmer With GitHub Copilot, get suggestions for whole lines or entire functions right inside your editor.

Trained on billions of lines of public code, GitHub Copilot puts the knowledge you need at your fingertips, saving you time and helping you stay focused.

### More than autocomplete

GitHub Copilot is powered by Codex, the new AI system created by OpenAI. GitHub Copilot understands significantly more context than most code assistants. So, whether it’s in a docstring, comment, function name, or the code itself, GitHub Copilot uses the context you’ve provided and synthesizes code to match. Together with OpenAI, we’re designing GitHub Copilot to get smarter at producing safe and effective code as developers use it.

On the morning of March 30th, at 9:30am, I received an email from GitHub approving my application for GitHub Copilot.

After a few hours of using it, the most intuitive feeling I had was that I was going to lose my job: it was so smart that it would automatically AI-complete the logic by writing a comment and a method name

[Leetcode 239 Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)

``` swift
// Github Copilot
class Solution {
    // Sliding Window Maximum
    func maxSlidingWindow(_ nums: [Int], _ k: Int) -> [Int] {
        // github copilot Generated code snippets
       var res = [Int]()
        if nums.count == 0 {
            return res
        }
        var deque = [Int]()
        for i in 0..<nums.count {
            while deque.count > 0 && nums[deque.last!] < nums[i] {
                deque.removeLast()
            }
            deque.append(i)
            if deque.first! + k <= i {
                deque.removeFirst()
            }
            if i >= k - 1 {
                res.append(nums[deque.first!])
            }
        }
        return res
    }
}

// ME
class DequeItem {
    public var prior: DequeItem?
    public var next: DequeItem?
    public var val: Int
  
    init(_ value: Int) {
        self.prior = nil
        self.next = nil
        self.val = value
    }
}

class Deque {
    private var first: DequeItem?
    private var last: DequeItem?
  
    init() {
        self.first = nil
        self.last = nil
    }
  
    func isEmpty() -> Bool {
        return first == nil
    }
  
    func peekFirst() -> Int {
        return first!.val
    }
  
    func peekLast() -> Int {
        return last!.val
    }
  
    func pollFirst() {
        if let first = self.first {
            if let prior = first.prior {
                prior.next = nil
                first.prior = nil
                self.first = prior
            } else {
                self.first = nil
                self.last = nil
            }
        }
    }
  
    func pollLast() {
        if let last = self.last {
            if let next = last.next {
                next.prior = nil
                last.next = nil
                self.last = next
            } else {
                self.first = nil
                self.last = nil
            }
        }
    }
  
    func offerFirst(_ num: Int) {
        let item = DequeItem(num)
        if let first = self.first {
            first.next = item
            item.prior = first
            self.first = item
        } else {
            self.first = item
            self.last = item
        }
    }
  
    func offerLast(_ num: Int) {
        let item = DequeItem(num)
        if let last = self.last {
            last.prior = item
            item.next = last
            self.last = item
        } else {
            self.first = item
            self.last = item
        }
    }
}

class Solution {
    func maxSlidingWindow(_ nums: [Int], _ k: Int) -> [Int] {
        if k == 1 { return nums }
        var deque = Deque(), result = [Int]()
        for i in 0..<nums.count {
            while !deque.isEmpty() && deque.peekFirst() < i - k + 1 {
                deque.pollFirst()
            }
            while !deque.isEmpty() && nums[deque.peekLast()] < nums[i] {
                deque.pollLast()
            }
            deque.offerLast(i)
            if i >= k - 1 {
                result.append(nums[deque.peekFirst()])
            }
        }
        return result
    }
}
```

### Time consumption, memory comparison

| Time Submitted   | Status   | Runtime | Memory  | Language |
| ---------------- | -------- | ------- | ------- | -------- |
| 03/30/2022 13:08 | Accepted | 2788 ms | 25.9 MB | Swift    |
| 03/24/2022 10:29 | Accepted | 2453 ms | 28.1 MB | Swift    |

### Feelings

1. write a method to split a request into multiple requests and merge the results without affecting the original logic, the merge code was completed when I finished writing Promise.all
2. adding a new translation by typing in Chinese and then just typing in the key name in English, the translation is automatically completed
3. a class needs to switch state to control the display and hiding of a part, the node to control the hiding I have defined first, the state type I have also ordered, when I type switchMode method name method content with switch statement to complete.
From then on Cmd + C, Cmd + V is completely meaningless, Tab YYDS
5. since the beginning of my career, I have always reminded myself to write code comments for my own convenience and the convenience of others (what is the difference between knocking out code without writing comments and being a hooligan), now I feel more intuitive
6. writing unit tests will be very useful in the future!
7. writing creative code is not helpful, building a wheel is like a godsend.
8. will make people dependent, probably ...

### Are the benefits worth the risk?

[GitHub’s AI Tool Speeds Up Development, but Comes with Risks](https://www.backhub.co/blog/copilot-github-ai-tool-security-risks) As mentioned in, it may inadvertently introduce security vulnerabilities that your security team is unable to predict or correct due to inexperience.

Is it really a big deal if Copilot offers more value or a faster turnaround time for your coding projects?

Yes. The best software in the world is worthless if it has a lot of security flaws. Security is paramount in this day and age. Antivirus has to be airtight. You need a backup service for your crucial data. Your code can’t be vulnerable to network attacks.

Bottom line: Copilot might be an interesting tool, but its potential security flaws more than offset that value and should make you think twice before adopting it in your organization.

### Copilot What safety risks can this lead to?

The core security issue with Copilot is this:

- Copilot takes its so-called semantic hints from a variety of sources, including source code
- Lots of source code is public
- Public source code is notorious for bugs, references to outdated APIs, and coding patterns that are, to say the least, insecure
- If Copilot synthesizes code blocks using suggestions from this data, it might also synthesize the same vulnerabilities inherent in those code samples

> The bottom line: the threat to machine learning is already here. copilot certainly isn't ready for widespread adoption. Worse still, it may never be. It's too early to say.

### Overview

Finally, Copilot is another novel way of integrating machine learning and artificial intelligence techniques to reduce development time for programmers.

However, Copilot also introduces a number of security risks that could threaten your data, albeit through no fault of its own. Conversely, the fact that it must take coding samples from the generation of flawed code may ultimately diminish its maximum potential.

Overall, it is best to look to Copilot as a possible means of speeding up development time in some areas. For example, it will never be a complete replacement for good coding practice and will probably never replace your IT security team. Time will tell if Copilot reaches its full potential or if it remains another failed experiment in ML/AI.
