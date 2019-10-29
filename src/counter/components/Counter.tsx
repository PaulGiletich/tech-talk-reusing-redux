import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import { decrement, increment } from "../actions";

export const Counter = () => {
    const value = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(decrement())}>-</button>
            {value}
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    );
};
