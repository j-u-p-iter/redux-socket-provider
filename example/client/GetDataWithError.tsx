import * as React from 'react';

import { useGetData } from '../../src'; 
import { messages } from './constants';

export const GetDataWithError = () => {
  const { error, isLoading } = useGetData(messages.GET_DATA_WITH_ERROR);

  return (
    <>
      {isLoading ? <div data-cy='spinner-from-hook'>Getting data</div> : null}
      {error ? <div data-cy='error-from-hook'>{error}</div> : null}
    </>
  );
}
