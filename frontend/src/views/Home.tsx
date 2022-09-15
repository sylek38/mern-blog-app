import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { EmptyBox } from "../components/emptyBox/EmptyBox";
import { PostList } from "../components/postList/postList/PostList";
import { Context } from "../contexts/Context";
import { Layout } from "./layout/Layout";

export type PostType = {
    _id: string;
    createdAt: string;
    desc: "string";
    title: "string";
    username: "string";
    categories: string[] | [];
    photo: string;
};

export const Home = () => {
    const [posts, setPosts] = useState<PostType[] | []>([]);
    const { search } = useLocation();

    const { user } = useContext(Context);

    useEffect(() => {
        const fetchPosts = async () => {
            const fetchedPosts = await axios.get<PostType[]>(
                "backend/posts" + search,
            );
            setPosts(fetchedPosts.data);
        };

        fetchPosts();
        console.log(posts ? "jest cos" : "nie ma");
    }, [search]);

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    return (
        <Layout wide>
            {posts.length > 0 ? <PostList posts={posts} /> : <EmptyBox />}
        </Layout>
    );
};
