import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const handleFontSize = (size: string) => {
    switch (size) {
        case "sm":
            return "var(--font-size-14)";
        case "lg":
            return "var(--font-size-20)";
        default:
            return "var(--font-size-1)";
    }
};

const handlePadding = (size: string) => {
    switch (size) {
        case "sm":
            return "0.5rem 1rem";
        case "lg":
            return "1rem 2rem";
        default:
            return "0.75rem 1.5rem";
    }
};

const generateStyle = (color: string, size: string) => css`
    background-color: var(--color-${color});
    color: ${color === "white" ? "black" : "var(--color-white)"};
    border-radius: 2rem;
    border: none;
    ${color === "white" &&
    css`
        outline: 2px solid var(--color-black);
        outline-offset: -2px;
    `}
    padding: ${handlePadding(size)};
    font-size: ${handleFontSize(size)};
    font-weight: 600;
`;

export const StyledLink = styled(Link)<{
    color: string;
    size: string;
}>`
    ${({ color, size }) => css`
        ${generateStyle(color, size)}
    `}
`;

export const Button = styled.button<{
    color: string;
    size: string;
}>`
    cursor: pointer;

    ${({ color, size }) => css`
        ${generateStyle(color, size)}
    `}
`;
