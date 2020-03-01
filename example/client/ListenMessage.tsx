import * as React from 'react';
import { useSelector } from 'react-redux';

import { useListenMessage } from '../../src'; 
import { messages } from './constants';

export const ListenMessage = () => {
  const { data } = useListenMessage(messages.INITIAL_MESSAGE);
  const { result: dataFromRedux } = useSelector(state => state);

  return (
    <>
      {dataFromRedux ? <div data-cy='result-from-redux'>{dataFromRedux.id}</div> : null}
      {data ? <div data-cy='result-from-hook'>{data.id}</div> : null}
    </>
  );
}
