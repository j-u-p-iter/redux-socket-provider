import { createContext } from "react";

interface ReduxSocketProviderValue {
  socket: SocketIOClient.Socket | null;
}

const defaultReduxSocketProviderValue: ReduxSocketProviderValue = {
  socket: null
};

export const ReduxSocketProviderContext = createContext<
  ReduxSocketProviderValue
>(defaultReduxSocketProviderValue);
