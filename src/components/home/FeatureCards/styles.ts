import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FeatureSection = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  
  @media (prefers-color-scheme: dark) {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const FeatureContainer = styled.div`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const FeatureCardWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const StyledCard = styled.div`
  background: ${({ theme }) => theme.colors.textLight};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  transition: ${({ theme }) => theme.transitions.default};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const IconWrapper = styled.div`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primaryLight};
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-weight: bold;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textDark};
  opacity: 0.8;
  line-height: 1.6;
`;

export const ExpandedContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.gradient};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: left;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;
  color: ${({ theme }) => theme.colors.textLight};
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${StyledCard}:hover & {
    transform: translateY(0);
  }

  ${CardTitle}, ${CardDescription} {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;
