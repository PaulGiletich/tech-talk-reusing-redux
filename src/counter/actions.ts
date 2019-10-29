import { createStandardAction } from "typesafe-actions";

export const increment = createStandardAction("INC")<void>();
export const decrement = createStandardAction("DEC")<void>();
