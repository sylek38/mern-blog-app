import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    label {
        font-size: var(--font-size-12);
        color: var(--color-gray);
        padding: 0 0.5rem;
    }
`;

export const TextAreaInput = styled.textarea`
    min-height: ${pxToRem(200)};
    padding: 0.5rem;
    border-radius: 1rem;
    border: 3px solid var(--color-mint);
    color: var(--color-gray);
    font-family: inherit;
    margin: 0;
    resize: none;

    &:focus-visible {
        outline: 2px solid var(--color-mint-dark);
        outline-offset: -3px;
    }
`;
