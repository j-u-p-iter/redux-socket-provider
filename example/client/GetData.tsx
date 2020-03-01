import * as React from 'react';
import { useSelector } from 'react-redux';
import { useGetData } from '../../src'; 
import { messages } from './constants';

export const GetData = () => {
  const { data, isLoading } = useGetData(messages.GET_DATA);
  const { result: dataFromRedux, isLoading: isLoadingFromRedux } = useSelector(state => state);

  return (
    <>
      {isLoadingFromRedux ? <div data-cy='spinner-from-redux'>Getting data from redux</div> : null}
      {dataFromRedux ? <div data-cy='result-from-redux'>{dataFromRedux.id}</div> : null}

      {isLoading ? <div data-cy='spinner-from-hook'>Getting data</div> : null}
      {data ? <div data-cy='result-from-hook'>{data.id}</div> : null}
    </>
  );
}
