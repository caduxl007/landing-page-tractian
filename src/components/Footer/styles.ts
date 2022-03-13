import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: 5rem;
  padding: ${({ theme }) => theme.spacing.padding_container_default};

  > div {
    margin: 0 auto;
    max-width: ${({ theme }) => theme.spacing.max_width};
  }
`;

export const ContentNav = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 7rem;

  > div {
    text-align: center;
    h4 {
      color: ${({ theme }) => theme.colors.secundary};
      font-size: 1.8rem;
      text-transform: uppercase;
    }

    > div {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 2rem;
    }
  }
`;

export const FooterInfo = styled.div`
  margin-top: 18rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-around;

  &:before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.secundary};
  }

  p {
    color: ${({ theme }) => theme.colors.white};
  }

  > div {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;
