import * as React from 'react';

import { useSendData } from '../../src'; 
import { messages } from './constants';

const { useState } = React;

export const SendDataWithError = () => {
  const { error, sendData, isLoading } = useSendData(messages.UPDATE_ITEM_WITH_ERROR);
  const [errorFromMethod, setErrorFromMethod] = useState();

  const handleClick = async () => {
    try {
      await sendData({ 
        data: { counter: 1 } 
      });
    } catch(error) {
      setErrorFromMethod(error); 
    }
  }

  return (
    <>
      {isLoading ? <div data-cy='spinner'>Sending data</div> : null}

      {error ? <div data-cy='error'>{error}</div> : null}

      {errorFromMethod ? <div data-cy='errorFromMethod'>{errorFromMethod}</div> : null}

      <button data-cy='sendData' onClick={handleClick}>Send data</button>
    </>
  );
}
