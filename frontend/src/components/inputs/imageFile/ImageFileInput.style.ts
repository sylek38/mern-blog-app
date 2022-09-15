import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
        font-size: var(--font-size-12);
        color: var(--color-gray);
        padding: 0 0.5rem;
    }
`;

export const ImageFileInput = styled.input`
    padding: 0 0.5rem;
    font-size: inherit;
    color: var(--color-gray);

    &::file-selector-button {
        padding: 0.5rem 1rem;
        margin-right: 1rem;
        border-radius: 1rem;
        border: none;
        background-color: var(--color-mint-dark);
        color: var(--color-white);
        cursor: pointer;
    }
`;
