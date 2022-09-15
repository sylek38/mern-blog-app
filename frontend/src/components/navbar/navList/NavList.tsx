import * as S from "./NavList.style";
import { navBarItems } from "../navBarItems";
import { Button } from "../../button/Button";
import { Hamburger } from "../hamburger/Hamburger";
import { useContext, useState } from "react";
import { Context, ReducerContext } from "../../../contexts/Context";
import { ActionKind } from "../../../contexts/Reducer";
import { Link } from "react-router-dom";

export const NavList = () => {
    const { user } = useContext(Context);

    const [isOpen, setOpen] = useState(false);

    const dispatch = useContext(ReducerContext);

    const handleLogout = () => {
        dispatch({ type: ActionKind.LOGOUT });
    };

    return (
        <>
            <S.Container isOpen={isOpen}>
                <S.NavList>
                    {navBarItems.map((item) => (
                        <S.NavItem key={item.title}>
                            <Link to={item.href}>{item.title}</Link>
                        </S.NavItem>
                    ))}
                </S.NavList>
                {user ? (
                    <S.LoggedInUserItems>
                        <Button color="black" size="md" href="newBlog">
                            New Blog
                        </Button>

                        <Button color="white" size="sm" onClick={handleLogout}>
                            Log out
                        </Button>
                        <S.AvatarContainer>
                            <Link to="/settings">
                                <S.Avatar src="https://cdn2.vectorstock.com/i/1000x1000/32/01/user-sign-icon-person-symbol-human-avatar-vector-12693201.jpg" />
                            </Link>
                        </S.AvatarContainer>
                    </S.LoggedInUserItems>
                ) : (
                    <S.AuthButtons>
                        <Button color="white" size="md" href="login">
                            Login
                        </Button>
                        <Button color="black" size="md" href="register">
                            Register
                        </Button>
                    </S.AuthButtons>
                )}
            </S.Container>
            <Hamburger isOpen={isOpen} setOpen={setOpen} />
        </>
    );
};
