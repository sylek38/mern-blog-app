import styled from "styled-components";

export const Container = styled.div<{ isOpen: boolean }>`
    display: flex;
    align-items: center;

    @media (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        transform: ${({ isOpen }) =>
            isOpen ? "translateX(100%)" : "translateX(0)"};
        transition: transform 0.3s ease-in-out;
        background-color: var(--color-white);
    }
`;

export const NavItem = styled.li`
    padding: 1.25rem;
    font-weight: bold;
    font-size: var(--font-size-18);
`;

export const NavList = styled.ul`
    display: flex;
    padding: 0;
    margin-right: 1rem;

    @media (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 0;
        margin-bottom: 0.5rem;

        /* background-color: ; */
    }

    ${NavItem} {
        /* color: gray; */
    }
`;

export const Avatar = styled.img`
    width: 100%;
    height: 100%;
`;

export const AvatarContainer = styled.div`
    width: 3.125rem;
    height: 3.125rem;
    margin-left: 1.5rem;
`;

export const LoggedInUserItems = styled.div`
    display: flex;
    align-items: center;

    > :nth-child(1) {
        margin-right: 3.5rem;
    }
`;

export const AuthButtons = styled.div`
    display: flex;
    gap: 1rem;
`;
