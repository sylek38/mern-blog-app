import axios from "axios";
import { ChangeEvent, SyntheticEvent, useContext, useState } from "react";
import { Context, ReducerContext } from "../../contexts/Context";
import { ActionKind } from "../../contexts/Reducer";
import { Button } from "../button/Button";
import { ErrorBox } from "../errorBox/ErrorBox";
import { TextInput } from "../inputs/text/TextInput";
import * as S from "./Login.style";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const { isFetching } = useContext(Context);
    const dispatch = useContext(ReducerContext);

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setError(false);
        dispatch({ type: ActionKind.LOGIN_START });

        try {
            const result = await axios.post("/backend/auth/login", {
                username,
                password,
            });

            dispatch({ type: ActionKind.LOGIN_SUCCESS, payload: result.data });
            // console.log(result.data);
            result.data && window.location.replace("/");
        } catch (err) {
            dispatch({ type: ActionKind.LOGIN_FAILURE });
            // eslint-disable-next-line no-console
            console.log(err);
            setError(true);
        }
    };

    return (
        <>
            <S.Form onSubmit={handleSubmit}>
                <h2>Login</h2>

                <TextInput
                    type="text"
                    id="username"
                    name="username_text"
                    label="User name"
                    autoFocus={true}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextInput
                    type="password"
                    id="password"
                    name="password_text"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    color="mint-intense"
                    size="md"
                    disabled={isFetching}
                    type="submit"
                >
                    Log in
                </Button>
            </S.Form>
            {error && <ErrorBox />}
        </>
    );
};
