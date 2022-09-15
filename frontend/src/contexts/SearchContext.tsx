import React from "react";
import { createContext, ReactNode, useState } from "react";

export const SearchContext = createContext({
  searchText: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSearchText: (el: string) => {},
});

interface Props {
  children: ReactNode;
}
export const SearchContextProvider = ({ children }: Props) => {
  // const setText = (searchText: string) => {
  //   setSearchText(searchText);
  // };

  // const initState = {
  //   searchText: "",
  //   setSearchText: setText
  // }

  const [searchText, setSearchText] = useState("");

  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchContext.Provider>
  );
};

// export const SearchProvider = SearchContext.Provider;
