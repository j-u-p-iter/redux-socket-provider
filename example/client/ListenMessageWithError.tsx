import * as React from 'react';

import { useListenMessage } from '../../src'; 
import { messages } from './constants';

export const ListenMessageWithError = () => {
  const { error } = useListenMessage(messages.INITIAL_MESSAGE_WITH_ERROR);

  return error ? <div data-cy='error-from-hook'>{error}</div> : null;
}
