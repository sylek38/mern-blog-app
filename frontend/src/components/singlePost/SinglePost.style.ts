import { pxToRem } from "./../utils/pxToRem";
import styled from "styled-components";

export const SinglePost = styled.div`
    background-color: var(--color-white);
    border-radius: 1rem;
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 500px;
    position: relative;

    & > img {
        border-radius: 1rem 1rem 0 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const ButtonsContainer = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;

    & > button {
        width: 100px;
        padding: 20px 1rem;
        border: 3px solid white;
        cursor: pointer;
        color: var(--color-white);
        border-color: solid var(--color-white);
        border-width: 6px;
        transition: var(--transition);
        text-transform: capitalize;
        font-weight: 600;

        &:first-child {
            background-color: var(--color-mint-dark);
            border-radius: 1rem 0 0 1rem;
            border-right-width: 3px;
        }

        &:last-child {
            background-color: var(--color-pink);
            border-radius: 0 1rem 1rem 0;
            border-left-width: 3px;
        }

        &:hover {
            filter: brightness(1.1);
        }
    }
`;

export const Content = styled.div`
    padding: ${pxToRem(50)} ${pxToRem(30)};
    width: 70%;
    margin: auto;
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: ${pxToRem(50)};
`;

export const DescriptionContainer = styled.div``;

export const Description = styled.p`
    color: var(--color-gray);
    text-align: justify;
`;
