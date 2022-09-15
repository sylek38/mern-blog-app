import { ChangeEvent } from "react";
import * as S from "./TextInput.style";

interface Props {
    type: "email" | "password" | "search" | "text";
    id: string;
    name?: string;
    placeholder?: string;
    maxLength?: number;
    autoFocus?: boolean;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
}

export const TextInput = ({
    type = "text",
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
            <S.TextInput
                type={type}
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
