import React, { FC, useRef } from "react";
import io from "socket.io-client";

import { ReduxSocketProviderContext } from "./ReduxSocketProviderContext";

interface ReduxSocketProviderProps {
  url: string;
}

export const ReduxSocketProvider: FC<ReduxSocketProviderProps> = ({
  url,
  children
}) => {
  const socketRef = useRef(io(url));

  return (
    <ReduxSocketProviderContext.Provider value={{ socket: socketRef.current }}>
      {children}
    </ReduxSocketProviderContext.Provider>
  );
};
