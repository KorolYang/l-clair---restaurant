import { AnyAction, Store } from "redux";
import { ThunkDispatch } from "redux-thunk";

export const useStoreDispatch = <TState>(
  store: Store<TState, AnyAction>,
): ThunkDispatch<TState, unknown, AnyAction> => {
  return store.dispatch as ThunkDispatch<TState, unknown, AnyAction>;
};
