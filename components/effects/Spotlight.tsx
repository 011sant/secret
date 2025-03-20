import { useMousePosition } from '@/hooks/useMousePosition';
import styled from 'styled-components';
import { ReactNode } from 'react';

interface SpotlightProps {
  children: ReactNode;
}

const SpotlightWrapper = styled.div`
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    inset: -100px;
    background: radial-gradient(
      circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.06),
      transparent 40%
    );
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const Spotlight = ({ children }: SpotlightProps) => {
  const { x, y } = useMousePosition();

  return (
    <SpotlightWrapper
      style={{
        '--mouse-x': `${x}px`,
        '--mouse-y': `${y}px`
      } as React.CSSProperties}
    >
      {children}
    </SpotlightWrapper>
  );
};
