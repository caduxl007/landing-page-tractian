import styled from 'styled-components';

export const Container = styled.section`
  max-width: ${({ theme }) => theme.spacing.max_width};
  margin: 0 auto;

  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: space-around;

  h2 {
    font-size: 3rem;
    font-weight: 500;
  }

  > form {
    max-width: 65rem;
    padding: 4rem;
    width: 100%;
    background-color: ${({theme}) => theme.colors.primary};

    > button {
      max-width: 25rem;
      width: 100%;
    }
  }
`;

export const ContentInput = styled.div`
  display: flex;
  gap: 1rem;

  div:nth-of-type(2) {
    width: 65%;
  }

  @media (max-width: 550px) {
    flex-wrap: wrap;

    div:nth-of-type(2) {
      width: 100%;
    }
  }
`;
