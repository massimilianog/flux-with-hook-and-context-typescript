import React, { createContext, useContext, Dispatch } from 'react';
import { State, Action } from './types/index';
import { rootReducer } from './rootReducer';
import useThunkReducer, { Thunk } from 'react-hook-thunk-reducer';

const initialState: State = { counter: { count: 0 }, userList: { users: [], isFetching: false } };
const Context: { state: State; dispatch: Dispatch<Action | Thunk<State, Action>> } = {
    state: initialState,
    dispatch: (value: any) => {},
};

export const StateContext = createContext(Context);

export const StateProvider = ({ children }: any) => {
    const [state, dispatch] = useThunkReducer(rootReducer, initialState);

    return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};

export const useStateValue = (): { state: State; dispatch: Dispatch<Action | Thunk<State, Action>> } =>
    useContext(StateContext);
