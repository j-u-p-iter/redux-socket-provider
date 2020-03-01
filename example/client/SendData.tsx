import * as React from 'react';
import { useSelector } from 'react-redux';

import { useSendData } from '../../src'; 
import { messages } from './constants';

export const SendData = () => {
  const { data, sendData, isLoading } = useSendData(messages.UPDATE_ITEM);
  const { result: dataFromRedux, isLoading: isLoadingFromRedux } = useSelector(state => state);

  const handleClick = withError => {
    sendData({ data: { counter: 1 } });
  }

  return (
    <>
      {isLoadingFromRedux ? <div data-cy='spinner-from-redux'>Sending data</div> : null}
      {dataFromRedux ? <div data-cy='result-from-redux'>{dataFromRedux.result}</div> : null}

      {isLoading ? <div data-cy='spinner-from-hook'>Sending data</div> : null}
      {data ? <div data-cy='result-from-hook'>{data.result}</div> : null}

      <button data-cy='sendData' onClick={handleClick}>Send data</button>
    </>
  );
}
