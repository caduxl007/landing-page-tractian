import styled from 'styled-components';

export const Container = styled.div`
  -ms-transform: skew(-7deg);
  -webkit-transform: skew(-7deg);
  background-color: ${({ theme }) => theme.colors.medium_white};
  border-radius: 14px;
  border-right: 4px solid ${({ theme }) => theme.colors.secundary};
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: space-between;
  max-width: 55rem;
  padding: 2rem;
  transform: skew(-7deg);
  width: 100%;

  i,
  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.medium_gray};
  }

  > footer {
    display: flex;
    align-items: center;
    gap: 1rem;

    h4 {
      color: ${({ theme }) => theme.colors.secundary};
    }
  }
`;
