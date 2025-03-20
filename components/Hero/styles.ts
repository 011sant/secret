import styled from 'styled-components';

export const HeroSection = styled.section`
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.textLight};
  padding: 5rem 0;
  text-align: center;
`;

export const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Title = styled.h1`
  font-size: 2.625rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }

  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.textLight} 0%,
    ${({ theme }) => theme.colors.accent} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: shine 3s linear infinite;

  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
`;

export const Description = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;
