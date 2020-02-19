import * as constants from './constants';
import { Dispatch } from 'react';
import fetchUsers from '../../api';
import { User } from '../../types';

// actions

export type FetchUserListAction = {
    type: string;
    users?: User[];
    errorMessage?: string;
};

// action creators

export const fetchUserList = () => (dispatch: Dispatch<FetchUserListAction>, getState: Function) => {
    dispatch({ type: constants.FETCH_USER_LIST_REQUEST });

    setTimeout(() => {
        return fetchUsers().then(
            (users: User[]) => {
                dispatch({
                    type: constants.FETCH_USER_LIST_SUCCESS,
                    users,
                });
            },
            error => {
                dispatch({
                    type: constants.FETCH_USER_LIST_FAILURE,
                    errorMessage: error.message,
                });
            }
        );
    }, 1000);
};
