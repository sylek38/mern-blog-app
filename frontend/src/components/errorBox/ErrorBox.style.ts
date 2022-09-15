import styled from "styled-components";
import { pxToRem } from "../utils/pxToRem";

export const ErrorBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    padding: 1.5rem;
    margin: auto;
    margin-top: 2rem;

    background-color: var(--color-white);
    border-radius: 1rem;
    border: 2px solid var(--color-pink);

    > span:first-child {
        font-weight: 600;
    }

    > span:last-child {
        margin-top: 0.25rem;
        font-size: ${pxToRem(14)};
    }
`;
