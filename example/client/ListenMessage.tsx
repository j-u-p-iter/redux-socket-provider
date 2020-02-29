import * as React from 'react';

import { useListenMessage } from '../../src'; 

export const ListenMessage = () => {
  const { data } = useListenMessage('initialMessage');

  return data ? <div data-cy='result'>{data.id}</div> : null;
}
