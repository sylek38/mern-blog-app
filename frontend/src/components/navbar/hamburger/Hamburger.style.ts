import styled from "styled-components";

export const Hamburger = styled.div<{ isOpen: boolean }>`
    display: none;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: fixed;
    top: 2rem;
    right: 2.813rem;
    width: 2rem;
    height: 2rem;
    z-index: 100;

    @media (max-width: 1024px) {
        display: flex;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: var(--color-black);
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ isOpen }) =>
                isOpen ? "rotate(0)" : "rotate(45deg)"};
        }

        &:nth-child(2) {
            transform: ${({ isOpen }) =>
                isOpen ? "translateX(0)" : "translateX(100%)"};
            opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
        }

        &:nth-child(3) {
            transform: ${({ isOpen }) =>
                isOpen ? "rotate(0)" : "rotate(-45deg)"};
        }
    }
`;
