import { ReactNode } from "react";
import { NavBar } from "../../components/navbar/NavBar";
import * as S from "./Layout.style";

interface Props {
    children: ReactNode | ReactNode[];
    wide?: boolean;
}

export const Layout = ({ children, wide = false }: Props) => {
    return (
        <>
            <NavBar />
            <S.Main wide={wide}>{children}</S.Main>
        </>
    );
};
