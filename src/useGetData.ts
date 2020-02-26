import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { createActionType } from "./helpers";
import { ReduxSocketProviderContext } from "./ReduxSocketProviderContext";

export type UseGetDataHook = (
  eventName: string
) => {
  data: any;
  error: string;
  isLoading: boolean;
  getData: () => void;
};

export const useGetData: UseGetDataHook = eventName => {
  const { socket } = useContext(ReduxSocketProviderContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  if (/^get/.test(eventName)) {
    throw new Error("Query should start with get prefix.");
  }

  const getData = () => {
    setIsLoading(true);

    dispatch({ type: createActionType(eventName) });

    socket.emit(
      eventName,
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

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    error,
    isLoading,
    getData
  };
};
