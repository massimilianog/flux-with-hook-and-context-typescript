import { FetchUserListAction } from './actions';
import { UserListState } from '../../types';
import * as constants from './constants';

export const userListReducer = (state: UserListState, action: FetchUserListAction): UserListState => {
    switch (action.type) {
        case constants.FETCH_USER_LIST_REQUEST:
            return { isFetching: true };
        case constants.FETCH_USER_LIST_SUCCESS:
            return {
                isFetching: false,
                users: action.users ? [...action.users] : [],
            };
        case constants.FETCH_USER_LIST_FAILURE:
            return {
                isFetching: false,
                errorMessage: action.errorMessage,
            };
        default:
            return state;
    }
};
