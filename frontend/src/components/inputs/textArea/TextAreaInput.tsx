import { ChangeEvent } from "react";
import * as S from "./TextAreaInput.style";

interface Props {
    id: string;
    name?: string;
    placeholder?: string;
    maxLength?: number;
    autoFocus?: boolean;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    label?: string;
}

export const TextAreaInput = ({
    id,
    name,
    placeholder,
    maxLength,
    autoFocus,
    value,
    onChange,
    label,
}: Props) => {
    return (
        <S.Container>
            <label htmlFor={id}>{label}</label>
            <S.TextAreaInput
                id={id}
                name={name}
                placeholder={placeholder}
                maxLength={maxLength}
                autoFocus={autoFocus}
                value={value}
                onChange={onChange}
            />
        </S.Container>
    );
};
