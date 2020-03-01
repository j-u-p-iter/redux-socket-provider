import * as React from 'react';

import { useSendData } from '../../src'; 
import { messages } from './constants';

export const SendDataWithError = () => {
  const { error, sendData, isLoading } = useSendData(messages.UPDATE_ITEM_WITH_ERROR);

  const handleClick = withError => {
    sendData({ data: { counter: 1 } });
  }

  return (
    <>
      {isLoading ? <div data-cy='spinner'>Sending data</div> : null}

      {error ? <div data-cy='error'>{error}</div> : null}

      <button data-cy='sendData' onClick={handleClick}>Send data</button>
    </>
  );
}
