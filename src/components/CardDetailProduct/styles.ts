import styled from 'styled-components';

export const Container = styled.div`
  max-width: 40rem;
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secundary};
  border-radius: 8px;
  box-shadow: 0px 30px 40px -20px rgb(0, 0, 0, 0.6);
  color: ${({ theme }) => theme.colors.white};
  padding: 3rem 2rem;

  h2 {
    font-size: 2.5rem;
  }

  > div {
    margin-top: 1rem;
    padding: 0 2rem;

    &::before {
      content: '';
      margin: 0.5rem 0;
      width: 30%;
      display: block;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.primary};
    }

    p {
      margin-top: 2rem;
      font-size: 1.6rem;
    }
  }
`;
