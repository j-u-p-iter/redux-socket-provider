import * as React from "react";
import io from "socket.io-client";

import { ReduxSocketProviderContext } from "./ReduxSocketProviderContext";

interface ReduxSocketProviderProps {
  url: string;
}

const { useRef } = React;

export const ReduxSocketProvider: React.FC<ReduxSocketProviderProps> = ({
  url,
  children
}) => {
  const socketRef = useRef();

  if (!socketRef.current) {
    socketRef.current = io(url);
  }

  return (
    <ReduxSocketProviderContext.Provider value={{ socket: socketRef.current }}>
      {children}
    </ReduxSocketProviderContext.Provider>
  );
};
