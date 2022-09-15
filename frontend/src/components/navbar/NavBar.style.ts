import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    display: flex;
    width: 100%;
    height: 6.25rem;
    align-items: center;
    gap: 4rem;
    padding: 1rem 2.813rem;
    background-color: var(--color-white);
    z-index: 1000;
`;
export const Logo = styled.h1`
    font-size: var(--font-size-32);
    color: var(--color-black);
`;

export const Nav = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
`;
