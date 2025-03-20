import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string; }[];
}

const MobileNav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.gradient};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
const menuVariants = {
  closed: { x: '100%', transition: { duration: 0.3 } },
  open: { x: 0, transition: { duration: 0.3 } }
};

const MobileMenu = ({ isOpen, onClose, links }: MobileMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <MobileNav
        initial="closed"
        animate="open"
        exit="closed"
        variants={menuVariants}
      >
        {links.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            whileHover={{ scale: 1.1 }}
            onClick={onClose}
          >
            {link.label}
          </motion.a>
        ))}
      </MobileNav>
    )}
  </AnimatePresence>
);

export default MobileMenu;
