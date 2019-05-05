export type Action<Type extends string, Payload = undefined> = {
  type: Type;
  payload: Payload;
};
