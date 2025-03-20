import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ReactNode } from 'react';

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
}

const TextWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const TextContent = styled(motion.span)`
  display: inline-block;
`;

export const TextReveal = ({ children, delay = 0 }: TextRevealProps) => (
  <TextWrapper>
    <TextContent
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.33, 1, 0.68, 1]
      }}
    >
      {children}
    </TextContent>
  </TextWrapper>
);
