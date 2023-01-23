import { useRef, useState } from 'react';

import Menu from '../Menu';
import MenuBurger from '../MenuBurger';

import logo from '../../assets/images/svg/icons/logo.svg';

import { Container } from './styles';

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);

  return (
    <Container ref={node}>
      <img src={logo} alt="" className="logo" />

      <Menu open={open} setOpen={setOpen} />
      <MenuBurger open={open} setOpen={setOpen} />
    </Container>
  );
}
