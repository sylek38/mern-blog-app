import * as S from "./Hamburger.style";

interface Props {
  isOpen: boolean;
  setOpen: (el: boolean) => void;
}

export const Hamburger = ({ isOpen, setOpen }: Props) => {
  return (
    <S.Hamburger isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
      <div />
      <div />
      <div />
    </S.Hamburger>
  );
};
