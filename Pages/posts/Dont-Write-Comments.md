---
title: 'Don not Write Comments'
date: 2023-02-13T11:30:00Z
draft: false
lang: en
duration: Read · 45min
description: Don not Write Comments。
---

[[toc]]

It's time to get a bit controversial.

I don't think you should write comments in your code pretty much most of the time.

Here, We have some code where we expact the value to be 5

```python
if status == 5
  message.markSent()
```

Looking at this code, it's not obvious what five signals. We could add a comments explaning what five is,

```python
# A status of 5 signals message sent
if status == 5
  message.markSent()
```

but even better we can create a constant representing the variable instead.

```python
MESSAGE_SENT = 5

if status == MESSAGE_SENT
  message.markSent()
```

The if statement now reads like a comment, that we want status to be message sent. If your code is complex enough that it warrants a comment, you should instead see you can refactor the code to make it better instead.

Right now, this condition is complex enough that we add a comment explaning it,

```python
# You can update a message IF the current user is the author of the message and the message was delivered
# less than 5 minutes ago OR if the current user is an administrator
# You can also edit the message if the message was not delivered yet

if(message.user.id == current_user.id and (message.delivered_time() is None or (datetime.now() - messsage.delivered_time()).seconds < 300)) or current_user.id.type == user.Administrator:
  message.update_text(text);
```

but we can simplify this by using variables to name parts of the expression.

```python
FIVE_MINUTES = 5 * 60
user_is_author = message.user.id == current_user.id
is_recent = message.delivered_time() is None or (datetime.now() - messsage.delivered_time()).seconds < FIVE_MINUTES
user_is_admin = current_user.id.type == user.Administrator

if(user_is_author and is_recent or current_user.id.type == user_is_admin:
  message.update_text(text);
```

Now the condition reads like the comment does. So the comment is basically redundant and can be removed. When conditions are complex enough like this, you could slso consider moving the whole condition to its own function.

```python
def can_edit_message(current_user, message):
  FIVE_MINUTES = 5 * 60

  user_is_author = message.user.id == current_user.id
  is_recent = message.delivered_time() is None or (datetime.now() - messsage.delivered_time()).seconds < FIVE_MINUTES
  user_is_admin = current_user.id.type == user.Administrator

  return (user_is_author and is_recent) or user_is_admin

if can_edit_message(current_user, message):
  current_message.update(text);
```

Now you don't need to decipher at all. Types can also make comments redundant. In C++, there's no built in memory management. You often have a function like this, where you get back a thing,

```c
message* receive_message();
```

but we need to make clear who kill take ownership of the thing. Ownership, meaning the responsibility to release the memory after everyone is done with it. In older C++, your pretty much had to rely on comments to do this.

```c
// Gets a message. Caller takes ownership of message.
message* receive_message();
```

if you were given ownership of an object, you'd find out by reading the comments of the function. But C++ added a new type called unique_ptr.

```c
std::unique_ptr<message> receive_message();
```

The type represents a unique reference to the object. So if you get one, congratulations!

It's now your responsibility.

The type tells you explicitly that you now own it without the need for a comment. And even better, the type makes it so you get a complie error if you do bad things with it. A comments doesn't do that.

Likewise, if we have a function that returns an int, but that int is optional.

```c
// Get the delivered timestamp. 
// A value of -1 is returned if the message has not been delivered.
int64_t delivered_timestamp();
```

We could add a comment say that -1 means we're not actually returning a value. But even better, we could use a type. if we return an optional int instead, it's now obvious that we might not give a value.

```c
std::optional<int64_t> delivered_timestamp();
```

We can't miss the comment and not realize that we might get an invalid timestamp back. The user needs to handle a missing value or they'll get a compiler error.

## why not Both?

- Wonder why don't we just make our code high quality and add comments anyways?
- Isn't more comments just better?
- That ignores the problems with comments.

## Comments get bugs

Comments get bugs like code. When people make changes to code they often don't update the comments to match.

```c
# Verify the users passward is least 8 characters Long
if len(passward) < 10:
  return False
```

But unlike comments, we have tools to stop bugs from entering code. We have

- Tests
- Compiler checks
- limiting

We don't have any system like that for comments. Maybe one day we can have some static analysis tool that uses AI to determine. If the code matches the comments and flags
any discrepancies - there's a start up idea - but because of this i don't trust the comments even when they exist.

## Comments Lie

Comments can lie, but code cannot. So when trying to understand what a piece of code does, I read the code. I never read the comments. Maybe It's just me.Do you guys find yourself reading comments to understand code?

## Code Documentation

What I do read is code documentation. Code documentation describes the high level architecture and public APIs of a system. Code documentation differs from comments where comments describe the internals of how your code works. Documentation describes how you use the code.

| Code Documentation       | Code Comments                        |
| --------------- | -------------------------------------- |
|How code is used|How code works|

The world needs more high quality documentation, and while we could write the documentaton for our code completely separated from our code, it makes sense to keep our documentation as close to the code as possible in order to try to help them stay in sync. Tools like Doxygen, pydoc and JavaDoc generate documents directly from code files and therefor change alongside our code.

## What to Document

It's useful to document what a class or API represents and any expectations for interface definitions like thread safety, possible states or error conditions. This helps the consumers of the API know hot to use it and also helps any new implementers of the interface know how they're supposed to operate and behave.

The guidance I've given about comments still applies for documentation. If we write better APIs, our documentation will be more concise and less prone errors. But I concede that you'll never be able to make all of the parts of the system obvious with pure code.

I do think there's a few cases where you should consider comments:

- if the code does something non-obvious for performance reasons, a comment can help explan why the code look weird.
- if the code is utilizing a specific mathematical principle or an algorithm from a particular source your might consider linking to the source to help future maintainers.

There's this comic called comic strip, and one of the comincs is about a guy telling a developer that one day we won't need code in the future because you'll be able to simply write a spec and the program will just write itself. The developers are casting retorts that code is just a more precise way of writing a spec.

I mean, I think It's wrong. And A.I. is coming for all our jobs, and we should be afraid of the impending semipolitical turmoil that comes when our best tool for distributing wealth, the job disappears.

But alas, It still helps my point.

Code is a Much better way to express intert than comments about code. So in general, if you feel like you need human language to describe your code, see if you could make your code more human.

## Code

```python
import unittest
from datetime import datetime, timedelta

class User:
    Standard = 0
    Administrator = 1

    def __init__(self, id, type):
        self.id = id
        self.type = type

class Message:
    def __init__(self, user, delivered_time):
        self.text_updated = False
        self._delivered_time = delivered_time
        self.user = user

    def update_text(self, text):
        self.text_updated = True

    def delivered_time(self):
        return self._delivered_time

def test_expression(current_user, message, text):
    if (message.user.id == current_user.id and (
            message.delivered_time() is None or (datetime.now() - message.delivered_time()).seconds < 300
        )) or current_user.type == User.Administrator:

        message.update_text(text);

def test_expression_refactored(current_user, message, text):  
    FIVE_MINUTES = 5 * 60

    user_is_author = message.user.id == current_user.id
    is_recent = message.delivered_time() is None or (datetime.now() - message.delivered_time()).seconds < FIVE_MINUTES
    user_is_admin = current_user.type == User.Administrator

    if (user_is_author and is_recent) or user_is_admin:
        message.update_text(text);

def can_edit_message(current_user, message):
    FIVE_MINUTES = 5 * 60

    user_is_author = message.user.id == current_user.id
    is_recent = message.delivered_time() is None or (datetime.now() - message.delivered_time()).seconds < FIVE_MINUTES
    user_is_admin = current_user.type == User.Administrator

    return (user_is_author and is_recent) or user_is_admin

def test_expression_func(current_user, message, text):
    if can_edit_message(current_user, message):
        message.update_text(text);

class TestMethods(unittest.TestCase):
    METHODS = [ test_expression, test_expression_refactored, test_expression_func ]

    def test_sent_can_edit(self):
        for method in TestMethods.METHODS:
            currentUser = User(2, User.Standard)
            message = Message(currentUser, datetime.now())

            method(currentUser, message, "")
            self.assertTrue(message.text_updated)

    def test_sent_cannot_edit_time(self):
        for method in TestMethods.METHODS:
            currentUser = User(2, User.Standard)
            message = Message(currentUser, datetime.now() - timedelta(seconds=305))

            method(currentUser, message, "")
            self.assertFalse(message.text_updated)

    def test_sent_cannot_edit_user(self):
        for method in TestMethods.METHODS:
            currentUser = User(2, User.Standard)
            messageUser = User(3, User.Standard)
            message = Message(messageUser, datetime.now())

            method(currentUser, message, "")
            self.assertFalse(message.text_updated)

    def test_sent_can_not_delivered(self):
        for method in TestMethods.METHODS:
            currentUser = User(2, User.Administrator)
            message = Message(currentUser, None)

            method(currentUser, message, "")
            self.assertTrue(message.text_updated)

    def test_sent_can_edit_admin(self):
        for method in TestMethods.METHODS:
            currentUser = User(2, User.Administrator)
            messageUser = User(3, User.Standard)
            message = Message(messageUser, datetime.now())

            method(currentUser, message, "")
            self.assertTrue(message.text_updated)

    def test_sent_can_edit_admin_time(self):
        for method in TestMethods.METHODS:
            currentUser = User(2, User.Administrator)
            messageUser = User(3, User.Standard)
            message = Message(messageUser, datetime.now() - timedelta(seconds=305))

            method(currentUser, message, "")
            self.assertTrue(message.text_updated)


if __name__ == '__main__':
    unittest.main()
```
