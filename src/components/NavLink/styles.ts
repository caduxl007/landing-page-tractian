import styled from 'styled-components';

export const Container = styled.a`
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    color: ${({ theme }) => theme.colors.turquoise_blue};
  }
`;
