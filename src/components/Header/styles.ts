import styled from 'styled-components';

export const Container = styled.header`
  padding: 3rem;
  position: fixed;
  width: 100%;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.primary};

  > div {
    align-items: center;
    display: flex;
    gap: 4rem;
    justify-content: space-between;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.spacing.max_width};

    &,
    a {
      color: ${({ theme }) => theme.colors.white};
    }

    nav {
      display: flex;
      gap: 3rem;
    }

    > div {
      align-items: center;
      display: flex;
      gap: 2rem;
    }
  }
`;
