import { pxToRem } from "../../utils/pxToRem";
import styled from "styled-components";

export const Post = styled.a`
    display: block;
    width: 100%;
    /* height: 100%; */
    cursor: pointer;
`;

export const ImageContainer = styled.div`
    width: ${pxToRem(400)};
    height: ${pxToRem(300)};
    background-color: var(--color-gray-super-light);
    border-radius: 1rem 1rem 0 0;

    & > img {
        border-radius: 1rem 1rem 0 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${pxToRem(20)} ${pxToRem(30)};
    background-color: var(--color-white);
    border-radius: 0 0 1rem 1rem;
    height: 250px;
`;

export const Title = styled.span`
    width: fit-content;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: var(--font-size-24);
    font-weight: bold;
    line-height: 1.4;
    text-transform: capitalize;
`;

export const Description = styled.p`
    width: fit-content;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 1rem 0;

    font-size: var(--font-size-16);
    color: var(--color-gray);

    @media screen and (max-width: 600px) {
        /* width: 350px; */
    }
`;
