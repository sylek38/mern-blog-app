import { Link } from "react-router-dom";
import { SearchInput } from "../searchInput/SearchInput";
import * as S from "./NavBar.style";
import { NavList } from "./navList/NavList";

export const NavBar = () => {
    return (
        <S.Header>
            <Link to="/">
                <S.Logo>Cat Insider</S.Logo>
            </Link>
            <S.Nav>
                <NavList />
            </S.Nav>
        </S.Header>
    );
};
