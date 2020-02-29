import * as React from 'react';

import { useGetData } from '../../src'; 

export const GetDataWithError = () => {
  const { error, isLoading } = useGetData('getDataWithError');

  return (
    <>
      {isLoading ? <div data-cy='spinner'>Getting data</div> : null}

      {error ? <div data-cy='error'>{error}</div> : null}
    </>
  );
}
