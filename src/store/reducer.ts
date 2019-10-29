import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";
import { counterReducer } from "../counter/reducer";

export const rootReducer = combineReducers({
  counter: counterReducer
});

export type RootState = StateType<typeof rootReducer>;
