import { Nav, NavContainer, NavLinks } from './styles';
import { Logo } from '../Logo';

export const Navbar = () => (
  <Nav>
    <NavContainer>
      <Logo />
      <NavLinks>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </NavLinks>
    </NavContainer>
  </Nav>
);