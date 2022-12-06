---
title: 'OpenAi ChatGPT'
date: 2022-12-06T16:01:00Z
draft: false
lang: en
duration: Read · 20min
description: ChatGPT Optimizing Language Modelsfor Dialogue。
---

[[toc]]

### ChatGPT

- ChatGPT: Optimizing Language Modelsfor Dialogue

We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests. ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response.

### Samples

Question: **What's Covid-19?**

ChatGPT: **COVID-19** is a respiratory illness caused by a virus called **SARS-CoV-2**. **It was first identified in December 2019 in Wuhan, China and has since spread to become a global pandemic**. Symptoms of COVID-19 can include fever, cough, and difficulty breathing, and it can be severe or even fatal in some cases. The best way to prevent infection is to avoid exposure to the virus, and this can be done by washing your hands frequently, avoiding close contact with others, and wearing a face mask in public settings.

Question: **What are the five major areas of the Fourth Industrial Revolution?**

ChatGPT: The Fourth Industrial Revolution is a term used to describe the current trend of increasing automation and data exchange in manufacturing and other industries. It is marked by the integration of technologies such as artificial intelligence, the Internet of Things, and advanced robotics into these industries. The five major areas of the Fourth Industrial Revolution are:

1. **Artificial intelligence and machine learning:** These technologies are being used to automate many processes and make them more efficient.

2. **The Internet of Things:** This refers to the increasing number of devices that are connected to the internet, allowing them to collect and share data.

3. **Advanced robotics:** Robotics technology is becoming more advanced, enabling machines to perform tasks that were previously only possible for humans to do.

4. **3D printing:** This technology allows for the creation of physical objects from digital designs, potentially revolutionizing manufacturing and supply chains.

5. **Biotechnology:** Advances in biotechnology are enabling the development of new treatments and therapies for a variety of medical conditions.

Question: **Write an ERC20 contract with the token name TDP and a total amount of 10000000**

ChatGPT: Firstly, ERC20 is a token intelligent contract standard that runs on the ethereum blockchain. It defines a number of functions and variables that must be implemented in order to interact with other contracts or applications on the ethereum blockchain.

The following is an example of a simple ERC20 contract with a token name (TDP) and a total amount (10000000):

```c
pragma solidity ^0.6.0;

contract ERC20 {
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    constructor(string memory _name, string memory _symbol, uint8 _decimals, uint256 _totalSupply) public {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        totalSupply = _totalSupply;
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address _to, uint256 _value) public {
        require(balanceOf[msg.sender] >= _value && _value > 0);
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
    }

    function transferFrom(address _from, address _to, uint256 _value) public {
        require(balanceOf[_from] >= _value && allowance[_from][msg.sender] >= _value && _value > 0);
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;
    }

    function approve(address _spender, uint256 _value) public {
        allowance[msg.sender][_spender] = _value;
    }

    function increaseAllowance(address _spender, uint256 _addedValue) public {
        allowance[msg.sender][_spender] += _addedValue;
    }

    function decreaseAllowance(address _spender, uint256 _subtractedValue) public {
        allowance[msg.sender][_spender] -= _subtractedValue;
    }
}

contract TDP is ERC20 {
    constructor() ERC20("TDP", "TDP", 18, 10000000) public {
        // Code to initialize the contract goes here
    }
}
```

In this instance, we define two variables of the mapping type: balanceOf and allowance. balanceOf is mapped to an address corresponding to the number of tokens held at that address, while allowance is mapped to two addresses, the first representing the owner and the second the authorized address, corresponding to the number of tokens authorized by the owner to the authorized address The number of.

We have also implemented five functions：

- The `transfer` function is used to transfer tokens.
- The `transferFrom` function is used to transfer the owner's tokens to the authorized address.
- The `approve` function is used to authorise a certain number of tokens to the authorised address.
- The `increaseAllowance` function is used to increase the number of tokens the owner authorises to the authorised address.
- The `decreaseAllowance` function is used to decrease the number of tokens the owner has authorised to the authorised address.

Please note that this is a simple example and is not guaranteed to be secure in a real-world application. If the token smart contract is to be deployed into a production environment, additional testing and review is recommended to ensure security.

### Overview

If we are lucky, I think the future of the law will be redefined to include you as an individual and the AI that belongs to you, and the life, study and work of both will be closely integrated.

Since using ChatGPT, I have found that it is a test of one's curiosity, imagination and ability to ask questions, and that the unexpected answers come from the unexpected questions.

I've gotten used to his presence in the past two days, whether it's discussing products, writing code, designing, planning, asking for recipes, asking about life, asking about philosophy, he can answer all my questions in a deep and simple way, although he may not be able to say everything right, but his ideas are very good, and he can easily point out my blind spots in knowledge, and his efficiency has increased tenfold and hundredfold, I can't live without him anymore! 😭
