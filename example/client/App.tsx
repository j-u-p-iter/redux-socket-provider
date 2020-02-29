import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { ReduxSocketProvider } from '../../src';
import { SendData } from './SendData';
import { SendDataWithError } from './SendDataWithError';
import { GetData } from './GetData';
import { GetDataWithError } from './GetDataWithError';
import { ListenMessage } from './ListenMessage';
import { ListenMessageWithError } from './ListenMessageWithError';

export const App: React.FC = () => {
  const store = createStore(state => state);

  return (
    <Provider store={store}>
      <ReduxSocketProvider url='http://localhost:5000'>
        <Router>
          <Route path='/send-data'>
            <SendData />
          </Route>

          <Route path='/send-data-with-error'>
            <SendDataWithError />
          </Route>

          <Route path='/get-data'>
            <GetData />
          </Route>

          <Route path='/get-data-with-error'>
            <GetDataWithError />
          </Route>

          <Route path='/listen-message'>
            <ListenMessage />
          </Route>

          <Route path='/listen-message-with-error'>
            <ListenMessageWithError />
          </Route>
        </Router>
      </ReduxSocketProvider>
    </Provider>
  );
}
