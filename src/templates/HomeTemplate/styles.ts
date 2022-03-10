import styled from 'styled-components';

export const Container = styled.main`
  max-width: 100%;
`;

export const ContentSectionOne = styled.div`
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

export const ContentSectionTwo = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 8rem 2rem;

  > section {
    max-width: ${({ theme }) => theme.spacing.max_width};
    margin: 0 auto;
  }
`;

export const ContentBenefits = styled.div`
  background-color: #eee;
  padding: 8rem 2rem;

  > section {
    max-width: ${({ theme }) => theme.spacing.max_width};
    margin: 0 auto;
    text-align: center;

    > h2 {
      font-size: 4rem;
      font-weight: 400;
      /* -webkit-box-reflect: below 0
        linear-gradient(transparent, rgb(0, 0, 0, 0.2)); */
    }

    > div {
      /* display: flex;
      flex-wrap: wrap;
      margin-top: 5rem;
      gap: 2rem;
      justify-content: center;

      &. */

      display: flex;
        justify-content: center;
        align-items: center;
    }
  }
`;
