import * as React from 'react';

import { useGetData } from '../../src'; 

export const GetData = () => {
  const { data, isLoading } = useGetData('getData');

  return (
    <>
      {isLoading ? <div data-cy='spinner'>Getting data</div> : null}

      {data ? <div data-cy='result'>{data.id}</div> : null}
    </>
  );
}
