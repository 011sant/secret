import styled from 'styled-components';

export const FeatureSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
`;

export const FeatureContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const FeatureCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const StyledCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const ExpandedContent = styled.div`
  margin-top: 1rem;
  text-align: left;
  font-size: 0.9rem;
  color: #444;
`;
