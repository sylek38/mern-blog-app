import axios from "axios";
import { SyntheticEvent, useContext, useState } from "react";
import { Button } from "../../../components/button/Button";
import { ErrorBox } from "../../../components/errorBox/ErrorBox";
import { ImageFileInput } from "../../../components/inputs/imageFile/ImageFileInput";
import { TextInput } from "../../../components/inputs/text/TextInput";
import { Context } from "../../../contexts/Context";
import { ReducerContext } from "../../../contexts/Context";
import { ActionKind } from "../../../contexts/Reducer";
import * as S from "./Settings.style";

export const Settings = () => {
    const { user } = useContext(Context);

    const [file, setFile] = useState<File | null>(null);
    const [username, setUsername] = useState(user?.username);
    const [email, setEmail] = useState(user?.email);
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const dispatch = useContext(ReducerContext);

    const PF = "http://localhost:5000/images/";

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setError(false);
        dispatch({ type: ActionKind.UPDATE_START });
        const updatedUser = {
            userId: user?._id,
            username,
            email,
            password,
            profilePic: "",
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
                await axios.post("backend/upload", data);
            } catch (err) {
                setError(true);

                // eslint-disable-next-line no-console
                console.log(err);
            }
        }
        try {
            setError(false);

            const res = await axios.put(
                "backend/users/" + user?._id,
                updatedUser,
            );
            setSuccess(true);
            dispatch({ type: ActionKind.UPDATE_SUCCESS, payload: res.data });
        } catch (err) {
            setError(true);

            dispatch({ type: ActionKind.UPDATE_FAILURE });
        }
    };

    return (
        <>
            <S.Form onSubmit={handleSubmit}>
                <h2>Update Your Account</h2>

                <div>
                    <img
                        src={
                            file
                                ? URL.createObjectURL(file)
                                : PF + user?.profilePic
                        }
                        alt=""
                    />
                    <label htmlFor="fileInput"></label>
                    <ImageFileInput
                        id="update_profile_pic"
                        label="Change profile picture"
                        onChange={(e) => {
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            const image = e.target.files![0];
                            setFile(image);
                        }}
                    />
                </div>

                <TextInput
                    type="text"
                    id="update_username"
                    placeholder={"User name"}
                    value={username}
                    label="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    autoFocus
                />

                <TextInput
                    type="email"
                    id="update_email"
                    value={email}
                    placeholder={"Email"}
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextInput
                    type="password"
                    id="update_password"
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button color="mint-intense" size="md" type="submit">
                    Update
                </Button>
                {success && (
                    <span
                        style={{
                            color: "green",
                            textAlign: "center",
                            marginTop: "20px",
                        }}
                    >
                        Your profile has been updated!
                    </span>
                )}
            </S.Form>
            {error && <ErrorBox />}
        </>
    );
};
