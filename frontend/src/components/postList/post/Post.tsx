import { useEffect } from "react";
import { Tag } from "../../tag/Tag";
import * as S from "./Post.style";

interface Props {
    id: string;
    createdAt?: string;
    desc: "string";
    title: "string";
    username?: "string";
    categories: string | string[];
    photo: string;
}

export const Post = ({
    id,
    createdAt,
    desc,
    title,
    username,
    categories,
    photo,
}: Props) => {
    const category = categories.toString();

    useEffect(() => {
        console.log(typeof categories, "CATEGORIES ");
    }, []);

    return (
        <S.Post href={`/post/${id}`}>
            <S.ImageContainer>
                <img src={photo} alt="post image" />
            </S.ImageContainer>
            <S.InfoContainer>
                <div>
                    <S.Title>{title}</S.Title>
                    <S.Description>{desc}</S.Description>
                </div>
                <Tag>{category}</Tag>
            </S.InfoContainer>
        </S.Post>
    );
};
