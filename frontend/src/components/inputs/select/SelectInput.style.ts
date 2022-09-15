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

    /* Arrow for Select */
    div {
        display: grid;
        grid-template-areas: "select";
        align-items: center;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            left: 180px;
            top: ${pxToRem(17)};
            width: 0.6rem;
            height: 0.4rem;
            background-color: var(--color-mint);
            clip-path: polygon(100% 0%, 0 0%, 50% 100%);
            grid-area: select;
            justify-self: end;
        }
    }
`;
export const SelectInput = styled.select`
    appearance: none;
    width: ${pxToRem(200)};
    padding: 0.5rem;
    border-radius: 1rem;
    border: 3px solid var(--color-mint);
    color: var(--color-gray);
    font-family: inherit;
    grid-area: select;

    &:focus-visible {
        outline: 2px solid var(--color-mint-dark);
        outline-offset: -3px;
    }
    &::-ms-expand {
        display: none;
    }
`;
