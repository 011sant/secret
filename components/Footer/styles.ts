import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.textLight};
  padding: 4rem 0 2rem;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.5rem;
  margin-bottom: 2.5rem;
`;

export const FooterColumn = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.75rem;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 40px;
      height: 3px;
      background: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.75rem;
  }

  a {
    color: ${({ theme }) => theme.colors.gray[400]};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.textLight};
      padding-left: 0.5rem;
    }
  }
`;

export const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.gray[400]};
  font-size: 0.875rem;
`;

export const CareerSection = styled.div`
  text-align: center;
  padding: 2rem 0;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const CareerText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textLight};

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: underline;
    transition: ${({ theme }) => theme.transitions.default};
    font-weight: 600;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryLight};
      text-decoration: none;
    }
  }
`;
