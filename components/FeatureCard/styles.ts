import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.textLight};
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.small};
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.gradient};
    opacity: 0;
    transition: ${({ theme }) => theme.transitions.default};
    z-index: 0;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  &:hover:before {
    opacity: 0.05;
  }

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    padding: 2px;
    background: ${({ theme }) => theme.colors.gradient};
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover:after {
    opacity: 1;
  }
`;

export const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.textLight};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.75rem;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 1rem;
  font-size: 1.25rem;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textDark};
  opacity: 0.8;
  line-height: 1.6;
`;
