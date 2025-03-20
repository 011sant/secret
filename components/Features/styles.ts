import styled from 'styled-components';

export const FeaturesSection = styled.section`
  padding: 5rem 0;
  background: ${({ theme }) => theme.colors.background};
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

export const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primaryDark};
    position: relative;
    padding-bottom: 1rem;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: ${({ theme }) => theme.colors.accent};
      border-radius: 2px;
    }
  }
`;
