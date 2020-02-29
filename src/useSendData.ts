import { useContext, useState } from "react";
import { useDispatch } from "react-redux";

import { createActionType } from "./helpers";
import { ReduxSocketProviderContext } from "./ReduxSocketProviderContext";

export type UseSendDataHook = (
  eventName: string
) => {
  error: string;
  isLoading: boolean;
  sendData: (data) => void;
  data: { [key: string]: any };
};
export const useSendData: UseSendDataHook = eventName => {
  const { socket } = useContext(ReduxSocketProviderContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch();

  const sendData = dataToSend => {
    setIsLoading(true);

    dispatch({ type: createActionType(eventName) });

    socket.emit(
      eventName,
      dataToSend,
      ({ error: errorFromResponse, data: dataFromResponse }) => {
        setIsLoading(false);

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
  };

  return {
    data,
    error,
    isLoading,
    sendData
  };
};
