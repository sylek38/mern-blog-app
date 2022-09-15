import { ChangeEvent, KeyboardEventHandler, useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";

export const SearchInput = () => {
    const { searchText, setSearchText } = useContext(SearchContext);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const handleEnterKeyPressed: KeyboardEventHandler<HTMLInputElement> = (
        e,
    ) => {
        if (e.key === "Enter") {
            const target = e.target as HTMLInputElement;
            setSearchText(target.value);
        }
    };

    return (
        <input
            type="text"
            placeholder="Search..."
            onChange={handleInput}
            onKeyPress={handleEnterKeyPressed}
            value={searchText}
        />
    );
};
