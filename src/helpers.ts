import toSnakeCase from "to-snake-case";

type CreateActionType = (
  eventName: string,
  withSuccessType?: boolean
) => string;
export const createActionType: CreateActionType = (
  eventName: string,
  withSuccessType
): string => {
  const actionBaseName = toSnakeCase(eventName);
  const actionNameScope = "REDUX_SOCKET_PROVIDER";
  const actionSuffix = withSuccessType ? "_WITH_SUCCESS" : "";

  return `${actionNameScope}:${actionBaseName}${actionSuffix}`;
};
