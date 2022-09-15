import { pxToRem } from "./../utils/pxToRem";
import styled from "styled-components";

export const Tag = styled.div`
    width: fit-content;
    padding: ${pxToRem(8)} ${pxToRem(12)};
    border-radius: ${pxToRem(16)};
    background-color: var(--color-mint-dark);
    display: flex;
    align-items: center;

    & > span {
        font-size: var(--font-size-14);
        color: white;
        font-weight: bold;
        letter-spacing: 0.1rem;
    }
`;
