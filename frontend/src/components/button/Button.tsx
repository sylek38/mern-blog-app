import { ReactNode } from "react";
import * as S from "./Button.style";

interface Props {
    children: ReactNode | ReactNode[];
    color: "mint" | "mint-intense" | "pink" | "black" | "white";
    size: "sm" | "md" | "lg";
    href?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onClick?: () => void;
}

export const Button = ({
    children,
    color,
    size,
    href,
    type = "button",
    disabled,
    onClick,
}: Props) => {
    if (href) {
        return (
            <S.StyledLink color={color} size={size} to={`/${href}`}>
                {children}
            </S.StyledLink>
        );
    }

    return (
        <S.Button
            color={color}
            size={size}
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </S.Button>
    );
};
