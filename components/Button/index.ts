import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'outline';
}

export const Button = styled.a<ButtonProps>`
  display: inline-block;
  padding: 12px 24px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;

  ${({ variant, theme }) =>
    variant === 'outline'
      ? css`
          background-color: transparent;
          border: 2px solid ${theme.colors.textLight};
          color: ${theme.colors.textLight};

          &:hover {
            background-color: ${theme.colors.textLight};
            color: ${theme.colors.primary};
          }
        `
      : css`
          background-color: ${theme.colors.accent};
          color: ${theme.colors.textLight};
          border: none;

          &:hover {
            transform: translateY(-3px);
            box-shadow: ${theme.shadows.medium};
          }
        `}
`;
