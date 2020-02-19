import { State, Action } from './types';
import { counterReducer } from './features/counter/reducers';
import { userListReducer } from './features/userList/reducers';

export const rootReducer = ({ counter, userList }: State, action: Action) => ({
    counter: counterReducer(counter, action),
    userList: userListReducer(userList, action),
});
