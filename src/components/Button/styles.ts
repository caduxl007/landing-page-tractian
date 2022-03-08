import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.green};
    border-radius: 6px;
    color: ${theme.colors.white};
    font-weight: bold;
    padding: 1rem 2.4rem;
    transition: 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  `}
`;
