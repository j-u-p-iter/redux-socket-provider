# REDUX SOCKET PROVIDER

## Table of Contents

## The problem

There're a lot of different ways to organise your codebase to provide socket communication between server and client.
Such wide range of variants leads to confusion. As developers we prefer to set up structured, conventional rules for the
purpose of consistency. It's easier and more joyable to play the game, when you know the rules.

## The solution

This package sets up for you some set of rules to make socket communication between client and 
server more predictable and structured in react applications, that use redux pattern.


### Benefits:
- package provides set of react hooks to organize socket communication on client side. You won't use socket api directly in your code base. Instead you'll use react hooks api.
- we splitted socket's messages on three different groups. For each group of messages we created separate group of hooks to handle these messages.
- hooks provide ability to process loading process, handle errors and successful results.
- package dispatches set of redux actions you can use to handle data in your application.
