import * as React from 'react';

import { useListenMessage } from '../../src'; 

export const ListenMessageWithError = () => {
  const { error } = useListenMessage('initialMessageWithError');

  return error ? <div data-cy='error'>{error}</div> : null;
}
