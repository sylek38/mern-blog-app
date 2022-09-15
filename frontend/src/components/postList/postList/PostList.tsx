import { PostType } from "../../../views/Home";
import { Post } from "../post/Post";
import * as S from "./PostList.style";

interface Props {
    posts: PostType[];
}

export const PostList = ({ posts }: Props) => {
    return (
        <S.PostListContainer>
            <S.PostList>
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
