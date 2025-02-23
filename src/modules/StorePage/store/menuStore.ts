import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { menuReduser } from "./reducer";

export const rootReducers = combineReducers({
  menu: menuReduser,
});

export const menuStore = createStore(rootReducers, applyMiddleware(thunk));

export type TRootState = ReturnType<typeof rootReducers>;
