// base action interface
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Action<T = any> {
    type: T;
}

export type CounterState = {
    count: number;
};

export type User = {
    id: number;
    name: string;
};

export type UserListState = {
    users?: User[];
    isFetching: boolean;
    errorMessage?: string;
};

export type State = {
    counter: CounterState;
    userList: UserListState;
};
