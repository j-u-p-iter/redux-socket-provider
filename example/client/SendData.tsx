import * as React from 'react';
import { useSelector } from 'react-redux';

import { useSendData } from '../../src'; 
import { messages } from './constants';

const { useState } = React;

export const SendData = () => {
  const { data, sendData, isLoading } = useSendData(messages.UPDATE_ITEM);
  const { result: dataFromRedux, isLoading: isLoadingFromRedux } = useSelector(state => state);
  const [dataFromMethod, setDataFromMethod] = useState(null);

  const handleClick = async () => {
    const result = await sendData({ data: { counter: 1 } });

    setDataFromMethod(result);
  }

  return (
    <>
      {isLoadingFromRedux ? <div data-cy='spinner-from-redux'>Sending data</div> : null}
      {dataFromRedux ? <div data-cy='result-from-redux'>{dataFromRedux.result}</div> : null}

      {isLoading ? <div data-cy='spinner-from-hook'>Sending data</div> : null}
      {data ? <div data-cy='result-from-hook'>{data.result}</div> : null}
      {dataFromMethod ? <div data-cy='result-from-method'>{dataFromMethod.result}</div> : null}

      <button data-cy='sendData' onClick={handleClick}>Send data</button>
    </>
  );
}
