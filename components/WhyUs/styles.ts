import styled from 'styled-components';

export const WhyUsSection = styled.section`
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.textLight};
  padding: 5rem 0;
`;

export const WhyUsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const WhyUsCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const WhyUsIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.accent};
`;

export const WhyUsTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const WhyUsDescription = styled.p`
  opacity: 0.9;
  line-height: 1.6;
`;
