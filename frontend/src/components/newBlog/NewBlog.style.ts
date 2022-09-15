import styled from "styled-components";

export const Form = styled.form`
    background-color: var(--color-white);
    border-radius: 1rem;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;

    > * + * {
        margin-bottom: 1rem;
    }

    textarea {
        margin-bottom: 1.5rem;
    }

    select {
        margin-bottom: 1rem;
    }
`;

export const Title = styled.h1`
    color: var(--color-black);
    align-self: center;
    margin-bottom: 1.5rem;
`;
