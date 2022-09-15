import { ChangeEvent } from "react";
import * as S from "./ImageFileInput.style";

interface Props {
    id: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    accept?: string;
}

export const ImageFileInput = ({ id, value, onChange, label }: Props) => {
    return (
        <S.Container>
            <label htmlFor={id}>{label}</label>
            <S.ImageFileInput
                type="file"
                id={id}
                value={value}
                onChange={onChange}
            />
        </S.Container>
    );
};
