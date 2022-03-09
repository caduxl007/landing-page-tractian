import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};

  > div {
    max-width: ${({ theme }) => theme.spacing.max_width};
    margin: 0 auto;

    h2,
    p,
    a {
      color: white;
    }

    > section {
      gap: 6rem;
      padding: 18rem 7rem;
      position: relative;

      div {
        width: 45%;
        h2 {
          font-size: 3.6rem;
        }
        p {
          font-size: 1.8rem;
          line-height: 2.5rem;
          margin: 2rem 0;
          a {
            font-weight: bold;
          }
        }
      }

      aside {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
`;
