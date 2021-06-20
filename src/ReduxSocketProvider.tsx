import * as React from "react";
import io from "socket.io-client";

import { ReduxSocketProviderContext } from "./ReduxSocketProviderContext";

interface ReduxSocketProviderProps {
  url: string;
}

const { useState, useEffect } = React;

/**
 * Write an article about this update
 *
 *
 */

export const ReduxSocketProvider: React.FC<ReduxSocketProviderProps> = ({
  url,
  children
}) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    /**
     * Initialization is an asynchronous process,
     *   so, it should be put into the useEffect.
     *
     */
    setSocket(io(url));
  }, []);

  if (!socket) {
    return null;
  }

  return (
    <ReduxSocketProviderContext.Provider value={{ socket }}>
      {children}
    </ReduxSocketProviderContext.Provider>
  );
};
