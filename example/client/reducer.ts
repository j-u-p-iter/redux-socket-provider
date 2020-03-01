import toSnakeCase from 'to-snake-case';

import { messages } from './constants';
import { createActionType } from '../../src';


const initialState = {
  isLoading: false,
}

export const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case createActionType(messages.GET_DATA):
    case createActionType(messages.INITIAL_MESSAGE):
    case createActionType(messages.UPDATE_ITEM):
      return {
        ...state,
        isLoading: true,
      }

    case createActionType(messages.GET_DATA, true):
    case createActionType(messages.INITIAL_MESSAGE, true):
    case createActionType(messages.UPDATE_ITEM, true):
      return {
        ...state,
        isLoading: false,
        result: payload,
      }

    default:
      return state;
  }  
};
