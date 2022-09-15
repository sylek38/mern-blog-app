import axios from "axios";
import { SyntheticEvent, useState } from "react";
import { Button } from "../button/Button";
import { ErrorBox } from "../errorBox/ErrorBox";
import { TextInput } from "../inputs/text/TextInput";
import * as S from "./Register.style";

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setError(false);
        try {
            const result = await axios.post("/backend/auth/register", {
                username,
                email,
                password,
            });

            result.data && window.location.replace("/login");
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err);
            setError(true);
        }
    };

    return (
        <>
            <S.Form onSubmit={handleSubmit}>
                <h2>Register</h2>
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
                    type="email"
                    id="login"
                    name="login_text"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextInput
                    type="password"
                    id="password"
                    name="password_text"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button color="pink" size="md" type="submit">
                    Register
                </Button>
            </S.Form>
            {error && <ErrorBox />}
        </>
    );
};
