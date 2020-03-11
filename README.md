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

Everything starts with ReduxSocketProvider React component. This component is based on React context. 
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

### useGetData hook

This hook emmits message to the server. The purpose of this message is to request data from server. It's similar to GET HTTP request.

In the example below we request all messages from server and render result.

```jsx
import { useGetData } from '@j.u.p.iter/redux-socket-provider';

const MessagesList = () => {
  // sends "getAllMessages" event to server
  // and returns some data to handle request and it's result
  const { data, error, isLoading, getData } = useGetData('getAllMessages');
  
  // if request is not still resolved, show this message
  if (isLoading) {
    return <div>Loading...</div>
  }
  
  // if we got an error from the server, render this error message
  if (error) {
    return <div>{error}</div>
  }
  
  return (
    <>
      // Click on button to resend data
      <button onClick={getData}>Resend data</button>
      
      // render all messages data
      <ul>
        {data.map(({ content }) => {
          return <li>{content}</li>
        })}
      </ul>
    </>
  );
}

```
The example is self descriptive. As we can see from the above example:

- useGetData hook accepts eventName as the first and the only argument. As soon as you call useGetData hook, eventName emmits immediately.
- useGetData hook returns back set of data:
  - data - data object, returned from server
  - error - error message, returned from server
  - isLoading - status of the process. Until request to the server is not resolved isLoading is equal to true. As soon request to the server is resolved isLoading starts becoming equal to false
  - getData - callback you can use to send event "getAllMessages" again.
  
  
  ### useSendData hook

This hook emmits message to the server. The purpose of this message is to do some modifications on server side and to get back response about result of these modifications. It's similar to POST/PUT/DELETE HTTP requests.

In the example below we send the request to update message with id 1 on server.

```jsx
import { useSendData } from '@j.u.p.iter/redux-socket-provider';

const MessagesList = () => {
  // sends "updateMessage" event to server
  // and returns some data to handle request and it's result
  const { data, error, isLoading, sendData } = useGetData('updateMessage');
  
  // if request is not still resolved, show this message
  if (isLoading) {
    return <div>Loading...</div>
  }
  
  // if we got an error from server, render this error message
  if (error) {
    return <div>{error}</div>
  }
  
  return (
    <>
      // Click on button to update message content
      <button onClick={() => sendData({ id: 1, content: 'New message content' })}>Update message content</button>
      
      // render message's data with id equal to 1
      <div>{data.content}</div>
    </>
  );
}

```
The example is self descriptive. As we can see from the above example:

- useSendData hook accepts eventName as the first and the only argument. eventName we passed here won't be emmited until we call sendData method.
- useGetData hook returns back set of data:
  - data - data object, returned from server after data on server was successfully updated
  - error - error message, returned from server
  - isLoading - status of the process. Until request for updating data is not resolved isLoading is equal to true. As soon request for updating data is resolved isLoading starts becoming equal to false
  - sendData - callback you should call to emmit "updateMessage" event. You should pass data to update in form of object as the first and the only one argument.
