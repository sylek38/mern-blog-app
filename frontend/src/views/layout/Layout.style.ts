import styled, { css } from "styled-components";

export const Main = styled.main<{ wide: boolean }>`
    width: 100vw;
    margin: 0 auto;

    ${({ wide }) => css`
        padding: ${wide ? "10rem 4rem 4rem 4rem" : "10rem 25rem 4rem 25rem"};

        @media screen and (max-width: 1200px) {
            padding: 10rem 0rem 5rem 0rem;
        }
    `}
`;
