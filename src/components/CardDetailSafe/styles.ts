import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  max-width: 40rem;
  padding: 3rem 5rem;
  border-right: 2px dotted white;
  border-left: 2px dotted white;
  color: ${({ theme }) => theme.colors.white};

  h1 {
    font-size: 5rem;
    font-weight: 700;
  }

  p {
    font-size: 1.8rem;
    text-transform: uppercase;
  }
`;
