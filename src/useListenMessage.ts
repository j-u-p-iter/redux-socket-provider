import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { createActionType } from "./helpers";
import { ReduxSocketProviderContext } from "./ReduxSocketProviderContext";

export type UseListenMessage = (
  eventName: string
) => {
  error: string;
  data: { [key: string]: any };
};
export const useListenMessage: UseListenMessage = eventName => {
  const { socket } = useContext(ReduxSocketProviderContext);
  const dispatch = useDispatch();

  const [data, setData] = useState(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    socket.on(
      eventName,
      ({ error: errorFromResponse, data: dataFromResponse }) => {
        if (errorFromResponse) {
          setError(errorFromResponse);
          return;
        }

        dispatch({
          type: createActionType(eventName, true),
          payload: dataFromResponse
        });

        setData(dataFromResponse);
      }
    );
  }, []);

  return {
    data,
    error
  };
};
