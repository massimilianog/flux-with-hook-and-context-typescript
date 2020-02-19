import React from 'react';
import * as actions from './actions';

import { useStateValue } from '../../stateProvider';

export const Counter = () => {
    const { state, dispatch } = useStateValue();

    const onIncrement = () => {
        dispatch(actions.increment());
    };
    const onDecrement = () => {
        dispatch(actions.decrement());
    };

    return (
        <div className="hello">
            <div>Counter: {state.counter.count}</div>
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    );
};
