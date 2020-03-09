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

## Installation

You can install this project, via [`npm`](https://docs.npmjs.com/) or [`yarn`](https://yarnpkg.com/) package managers.

### Installing via npm
npm package manager is bundled with [node](https://nodejs.org/en/docs/). So, if you already have preinstalled node (I guess you have), you already have npm.

Go to the root of the project where you want to use this package and install it:

```
$ cd /root/project/folder
```

```
$ npm install @j.u.p.iter/redux-socket-provider --save-dev
```

### Installing via yarn
To install the package with yarn you should have yarn on your machine. How to install it you can found out [here]().

After that go to the root of the project where you want to use this package and install it:

```
$ cd /root/project/folder
```

```
$ yarn add @j.u.p.iter/redux-socket-provider --dev
```
