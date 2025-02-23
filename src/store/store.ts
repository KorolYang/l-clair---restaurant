import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { userReduser } from "./auth/reducer";
// import { UseDispatch, useDispatch } from "react-redux";

export const rootReducers = combineReducers({
  auth: userReduser,
});

export const appStore = createStore(rootReducers, applyMiddleware(thunk));

export type TRootState = ReturnType<typeof rootReducers>;
export const selectRoot = (state: TRootState) => state;
// type HeaderDispatch=()=>typeof heaaderStore.dispatch
// const useHeaderDispatch=()=>HeaderDispatch=useDispatch
