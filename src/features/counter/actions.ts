import * as constants from './constants';

// actions
export type CounterAction = {
    type: string;
};

//export type Action = CounterAction | FetchUserListAction;

// action creators

export function increment(): CounterAction {
    return {
        type: constants.INCREMENT,
    };
}

export function decrement(): CounterAction {
    return {
        type: constants.DECREMENT,
    };
}
