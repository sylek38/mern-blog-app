import { pxToRem } from "./../../utils/pxToRem";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    label {
        font-size: var(--font-size-12);
        color: var(--color-gray);
        padding: 0 0.5rem;
    }
`;

export const TextInput = styled.input`
    padding: 0.5rem;
    border-radius: 1rem;
    max-width: ${pxToRem(200)};
    border: 3px solid var(--color-mint);
    color: var(--color-gray);
    font-family: inherit;

    &:focus-visible {
        outline: 2px solid var(--color-mint-dark);
        outline-offset: -3px;
    }
`;
