import { CounterState } from "./types";

export const counterValueSelector = (state: CounterState) => state.value;
