import { StyledBurger } from './styles';

export interface MenuMobileProps {
  open: boolean;
  setOpen: (v: boolean) => void;
}

export default function MenuBurger({ open, setOpen }: MenuMobileProps) {
  return (
    <StyledBurger
      type="button"
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}
