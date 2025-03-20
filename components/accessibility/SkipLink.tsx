import styled from 'styled-components';

const SkipLink = styled.a`
  position: fixed;
  top: -100%;
  left: 0;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  z-index: 9999;
  transition: ${({ theme }) => theme.transitions.fast};

  &:focus {
    top: 0;
  }
`;

export const SkipToContent = () => (
  <SkipLink href="#main-content">
    Pular para o conteúdo principal
  </SkipLink>
);
