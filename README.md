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

### Peer dependencies
This package requires some [peer dependencies](https://nodejs.org/ru/blog/npm/peer-dependencies/). These are dependencies, that our package expects being preinstalled in your project.

Required peerdependencies:
- react
- redux
- react-redux

## Examples

### Base examples

#### Case 1

#### Case 2

#### Case 3

### More examples

#### Read source code of an example

[`example`](https://github.com/j-u-p-iter/redux-socket-provider/tree/master/example) folder of this package contains example of the small app with all possible use cases of this package. We highly recommend to explore source code for better understanding of all possibilities this package provides for you.

#### Run tests and read test

We use cypress for e2e testing of api this package provides. We recommend you to clone this package and to run this e2e tests. You can find all test cases [here](https://github.com/j-u-p-iter/redux-socket-provider/blob/master/cypress/integration/Example.js). Playing with tests and reading tests is also great a wait to understand package's api better.

## API

### ReduxSocketProvider

Everything starts with ReduxSocketProvider React component. This component is based or React context. 
It's responsibility to create socket connection and pass socket instance to the child components.

ReduxSocketProvider provides possibility to communicate through sockets to the child components. So all consumers 
of redux-socket-provider api should be wrapped with this component as in example below:

```
import { ReduxSocketProvider } from '@j.u.p.iter/redux-socket-provider';

const urlToCreateSocketConnection = 'http://localhost:3000';

const App = () => {
  <ReduxSocketProvider url={urlToCreateSocketConnection}>
  ...
  </ReduxSocketProvider>
};
```

ReduxSocketProvider accepts one single prop - `url`. Using this url ReduxSocketProvider creates socket connection with server (creates communication channel).
