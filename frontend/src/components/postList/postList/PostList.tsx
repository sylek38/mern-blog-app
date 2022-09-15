import { useContext } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import { TagType } from "../../../types/TagType";
import { PostType } from "../../../views/Home";
import { mockPostList } from "../mockData";
import { Post } from "../post/Post";
import * as S from "./PostList.style";

interface Props {
    posts: PostType[];
}

export const PostList = ({ posts }: Props) => {
    const { searchText, setSearchText } = useContext(SearchContext);

    return (
        <S.PostListContainer>
            <S.PostList>
                {/* TODO: DELETE THIS AND USE THE LIST BELOW IT */}
                {/* {mockPostList.map((item) => (
                    <S.Item key={item.id}>
                        <Post
                            title={item.title}
                            description={item.description}
                            tag={item.tag}
                            img={item.img}
                        />
                    </S.Item>
                ))} */}
                {posts.map((post) => (
                    <S.Item key={post._id}>
                        <Post
                            id={post._id}
                            createdAt={post.createdAt}
                            desc={post.desc}
                            title={post.title}
                            username={post.username}
                            categories={post.categories}
                            photo={post.photo}
                        />
                    </S.Item>
                ))}
            </S.PostList>
        </S.PostListContainer>
    );
};
