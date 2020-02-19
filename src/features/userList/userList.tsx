import React, { useEffect, useCallback } from 'react';
import { useStateValue } from '../../stateProvider';
import * as actions from './actions';

export const UserList = () => {
    const { state, dispatch } = useStateValue();

    const { isFetching, users, errorMessage } = state.userList;

    const fetchUserList = useCallback(() => {
        dispatch(actions.fetchUserList());
    }, [dispatch]);

    useEffect(() => {
        fetchUserList()
    }, [fetchUserList] );

    if (isFetching) {
        return <p style={{ textAlign: 'center' }}>Loading ...</p>;
    }
    if (errorMessage) {
        return (
            <div style={{ textAlign: 'center' }}>
                <p>Error: {errorMessage}</p>
                <button onClick={() => fetchUserList()}>Retry</button>
            </div>
        );
    }
    return (
        <div className="hello">
            <p>User List:</p>
            {users?.map(user => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
};
