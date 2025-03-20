import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LogoWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoSVG = styled.svg`
  width: 120px;
  height: auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100px;
  }
`;

export const Logo = () => (
  <Link href="/" passHref>
    <LogoWrapper
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <LogoSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 100">
        <g transform="translate(45, 27) scale(1.8)">
          <path
            d="M14.381 9.02721C14.9767 8.81911 15.6178 8.70588 16.2857 8.70588C16.9404 8.70588 17.5693 8.81468 18.1551 9.01498M7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H16.2857C19.4416 20 22 17.4717 22 14.3529C22 11.8811 20.393 9.78024 18.1551 9.01498M7.11616 11.6089C6.88706 10.9978 6.7619 10.3369 6.7619 9.64706C6.7619 6.52827 9.32028 4 12.4762 4C15.4159 4 17.8371 6.19371 18.1551 9.01498M7.11616 11.6089C7.68059 11.7184 8.20528 11.9374 8.66667 12.2426"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>
        <text x="125" y="55" fontFamily="Times New Roman, serif" fontSize="24" fill="currentColor" fontWeight="400" letterSpacing="2">
          SPECTER
        </text>
        <text x="265" y="55" fontFamily="Times New Roman, serif" fontSize="24" fill="currentColor" fontWeight="400" letterSpacing="2">
          SOFTWARE
        </text>
      </LogoSVG>
    </LogoWrapper>
  </Link>
);
