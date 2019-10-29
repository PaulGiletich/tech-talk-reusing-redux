import { createReducer } from "typesafe-actions";
import { decrement, increment } from "./actions";

const initialState = { value: 0 };

export const counterReducer = createReducer(initialState)
    .handleAction(increment, (state) => ({ value: state.value + 1 }))
    .handleAction(decrement, (state) => ({ value: state.value - 1 }));
