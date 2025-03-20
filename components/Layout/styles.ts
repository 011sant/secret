import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Header = styled.header`
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.textLight};
  box-shadow: ${({ theme }) => theme.shadows.small};
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Logo = styled.a`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const LogoIcon = styled.span`
  background-color: ${({ theme }) => theme.colors.textLight};
  color: ${({ theme }) => theme.colors.primary};
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-weight: bold;
  font-size: 20px;
`;
