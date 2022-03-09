import styled from 'styled-components';

export const Container = styled.div`
  max-width: 50rem;
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  background-color: #1c1c1c;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  padding: 2.4rem 2rem;

  h2 {
    font-size: 3rem;
  }

  > div {
    padding: 0 2rem;

    p {
      margin-top: 2rem;
      text-align: center;
      font-size: 2rem;
    }
  }
`;
