import { ReactNode } from "react";
import * as S from "./Tag.style";

interface Props {
    children: ReactNode | ReactNode[];
}

export const Tag = ({ children }: Props) => {
    return (
        <S.Tag>
            <span>#{children}</span>
        </S.Tag>
    );
};
