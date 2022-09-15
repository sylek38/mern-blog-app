import {
    createContext,
    Dispatch,
    ReactNode,
    useEffect,
    useReducer,
} from "react";
import { Action, Reducer } from "./Reducer";

export type UserType = {
    username: string;
    email: string;
    password: string;
    profilePic: string;
    _id?: string;
};

interface ContextType {
    user?: UserType | null;
    isFetching: boolean;
    isError: boolean;
    dispatch?: Dispatch<Action> | null;
}

export type InitialStateTypes = {
    user?: UserType | null;
    isFetching: boolean;
    isError: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch?: Dispatch<Action> | null;
};

interface Props {
    children: ReactNode | ReactNode[];
    // user: UserType;
    // isFetching: boolean;
    // isError: boolean;
}
const localStorageUser = localStorage.getItem("user");

const INITIAL_STATE = {
    user: localStorageUser ? JSON.parse(localStorageUser) : null,
    isFetching: false,
    isError: false,
};

export const Context = createContext<ContextType>(INITIAL_STATE);

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ReducerContext = createContext<Dispatch<Action>>(() => {});

export const ContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    useEffect(() => {
        console.log("context ", state.user);
    }, []);

    return (
        <Context.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                isError: state.isError,
            }}
        >
            <ReducerContext.Provider value={dispatch}>
                {children}
            </ReducerContext.Provider>
        </Context.Provider>
    );
};
