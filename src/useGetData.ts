import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { createActionType } from "./helpers";
import { ReduxSocketProviderContext } from "./ReduxSocketProviderContext";

type UseGetDataHook = (
  eventName: string
) => {
  data: any;
  error: string;
  isLoading: boolean;
  getData: () => void;
};

export const useGetData: UseGetDataHook = eventName => {
  const { socket } = useContext(ReduxSocketProviderContext);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const getData = () => {
    return new Promise((resolve, reject) => {
      setIsLoading(true);

      dispatch({ type: createActionType(eventName) });

      socket.emit(
        eventName,
        ({ error: errorFromResponse, data: dataFromResponse }) => {
          setIsLoading(false);

          if (errorFromResponse) {
            setError(errorFromResponse);

            reject(errorFromResponse);
            return;
          }

          dispatch({
            type: createActionType(eventName, true),
            payload: dataFromResponse
          });

          setData(dataFromResponse);

          resolve(dataFromResponse);
        }
      );
    });
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
