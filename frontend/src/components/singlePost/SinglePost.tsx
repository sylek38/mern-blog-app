import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../../contexts/Context";
import { PostType } from "../../views/Home";
import * as S from "./SinglePost.style";

export const SinglePost = () => {
    const location = useLocation();
    const [post, setPost] = useState<PostType | null>(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
    const [editButtonCurrentText, setEditButtonCurrentText] = useState("Edit");

    const slugPath = location.pathname.split("/")[2];

    const PF = "http://localhost:5000/images";

    const { user } = useContext(Context);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`/backend/posts/${slugPath}`);
            setPost(res.data);
            setTitle(res.data.title);
            setDescription(res.data.desc);
        };
        getPost();
    }, []);
    const handleDelete = async () => {
        try {
            await axios.delete(`/backend/posts/${post?._id}`, {
                data: { username: user?.username },
            });
            window.location.replace("/");
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err);
        }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`/backend/posts/${post?._id}`, {
                username: user?.username,
                title,
                description,
            });

            setUpdateMode(false);
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err);
        }
    };

    useEffect(() => {
        updateMode
            ? setEditButtonCurrentText("Save")
            : setEditButtonCurrentText("Edit");
    }, [updateMode]);

    return (
        <S.SinglePost>
            <S.ImageContainer>
                {post?.photo && (
                    <img src={`${PF}/${post?.photo}`} alt="background image" />
                )}
                {post?.username === user?.username && (
                    <S.ButtonsContainer>
                        <button
                            onClick={() => {
                                if (updateMode) {
                                    handleUpdate();
                                }
                                setUpdateMode((prevState) => !prevState);
                            }}
                        >
                            {editButtonCurrentText}
                        </button>
                        <button onClick={handleDelete}>delete</button>
                    </S.ButtonsContainer>
                )}
            </S.ImageContainer>
            <S.Content>
                {updateMode ? (
                    <>
                        <input
                            type="text"
                            value={title}
                            className="singlePostTitleInput"
                            autoFocus
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </>
                ) : (
                    <>
                        <S.Title>{title}</S.Title>
                        <S.Description>{description}</S.Description>
                    </>
                )}
            </S.Content>
        </S.SinglePost>
    );
};
