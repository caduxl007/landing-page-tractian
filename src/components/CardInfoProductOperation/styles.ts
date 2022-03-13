import styled from 'styled-components';

export const Container = styled.div`
  max-width: 60rem;
  padding: 2rem;
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  border-right: 2px solid ${({ theme }) => theme.colors.turquoise_blue};
  border-left: 2px solid ${({ theme }) => theme.colors.turquoise_blue};

  gap: 2rem;

  &:hover {
    background-color: rgb(255, 255, 255, 0.1);

    h4 {
      color: ${({ theme }) => theme.colors.turquoise_blue};
    }
  }

  span {
    background-color: ${({ theme }) => theme.colors.white};
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.secundary};
    font-weight: bold;
  }

  h4,
  p {
    color: ${({ theme }) => theme.colors.white};
  }

  h4 {
    font-size: 1.8rem;
  }

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &.active {
    background-color: rgb(255, 255, 255, 0.1);

    h4 {
      color: ${({ theme }) => theme.colors.turquoise_blue};
    }
  }
`;
