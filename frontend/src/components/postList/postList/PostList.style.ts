import styled from "styled-components";

export const PostListContainer = styled.div`
    width: 100%;
    margin: auto;
`;

export const PostList = styled.ul`
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const Item = styled.li`
    width: 400px;
    height: 550px;

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;
