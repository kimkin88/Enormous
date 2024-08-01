/* eslint-disable i18next/no-literal-string */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => { dispatch(counterActions.increment()); };
    const decrement = () => { dispatch(counterActions.decrement()); };
    return (
        <div>
            <h1>{counterValue}</h1>
            <Button onClick={increment}>increment</Button>
            <Button onClick={decrement}>decrement</Button>
        </div>
    );
};
