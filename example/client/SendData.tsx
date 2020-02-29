import * as React from 'react';

import { useSendData } from '../../src'; 

export const SendData = () => {
  const { data, sendData, isLoading } = useSendData('updateItem');

  const handleClick = withError => {
    sendData({ data: { counter: 1 } });
  }

  return (
    <>
      {isLoading ? <div data-cy='spinner'>Sending data</div> : null}

      {data ? <div data-cy='result'>{data.result}</div> : null}

      <button data-cy='sendData' onClick={handleClick}>Send data</button>
    </>
  );
}
