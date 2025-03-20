import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.gradient};
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    background: ${({ theme }) => theme.colors.textLight};
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.5rem;
    border-radius: 8px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: ${({ theme }) => theme.colors.textLight};
    text-decoration: none;
    font-weight: 500;
    position: relative;
    transition: ${({ theme }) => theme.transitions.default};

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background: ${({ theme }) => theme.colors.accent};
      transition: ${({ theme }) => theme.transitions.default};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      &:after {
        width: 100%;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.5rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;
