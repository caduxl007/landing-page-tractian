import styled from 'styled-components';

export const Container = styled.a`
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    color: #4cf2e2;
  }
`;
