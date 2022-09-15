import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.25rem;
    padding: 2rem;

    background-color: var(--color-white);
    border-radius: 1rem;

    > button {
        margin-top: 1rem;
    }
`;
