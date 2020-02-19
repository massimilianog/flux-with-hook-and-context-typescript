import { CounterAction } from './actions';
import * as constants from './constants';
import { CounterState } from '../../types';

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
        case constants.INCREMENT:
            return { count: state.count + 1 };
        case constants.DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }
};
