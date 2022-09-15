import { ChangeEvent } from "react";
import * as S from "./SelectInput.style";

type ItemsType = {
    text: string;
};

interface Props {
    id: string;
    name?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    label?: string;
    items: ItemsType[];
}

export const SelectInput = ({
    id,
    name,
    value,
    onChange,
    label,
    items,
}: Props) => {
    return (
        <S.Container>
            <label htmlFor={id}>{label}</label>
            <div>
                <S.SelectInput
                    className="select"
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                >
                    {items.map((item) => (
                        <option key={item.text} value={item.text}>
                            {item.text}
                        </option>
                    ))}
                </S.SelectInput>
            </div>
        </S.Container>
    );
};
