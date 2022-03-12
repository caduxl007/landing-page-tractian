import styled from 'styled-components';

export const Container = styled.main`
  max-width: 100%;

  > div {
    > section {
      max-width: ${({ theme }) => theme.spacing.max_width};
      margin: 0 auto;
    }
  }
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
  padding: ${({ theme }) => theme.spacing.padding_container_default};
`;

export const ContentInfoProductOperation = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.padding_container_default};

  > section {
    max-width: ${({ theme }) => theme.spacing.max_width};
    margin: 0 auto;
  }
`;

export const ContentBenefits = styled.div`
  background-color: #eee;
  padding: 8rem 2rem;

  > section {
    text-align: center;

    > h2 {
      font-size: 4rem;
      font-weight: 400;
      margin-bottom: 2rem;
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

      @media (max-width: 1000px) {
        flex-wrap: wrap;
      }
    }
  }
`;

export const ContentUsersFeedbacks = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.padding_container_default};

  > section {
    h2 {
      color: ${({ theme }) => theme.colors.white};
      font-size: 3.2rem;
      font-weight: 400;
      text-align: center;
    }

    > div {
      margin-top: 3rem;
      display: flex;
      flex-wrap: wrap;
      gap: 3rem;
      justify-content: center;
    }
  }
`;

export const ContentForm = styled.div`
  padding: ${({ theme }) => theme.spacing.padding_container_default};
`;
