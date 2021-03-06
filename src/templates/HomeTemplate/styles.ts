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
        width: 50%;
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

      @media (max-width: 1000px) {
        padding: 15rem 3rem 0 3rem;
        div {
          width: 70%;
        }

        aside {
          position: relative;
        }
      }

      @media (max-width: 560px) {
        div {
          width: 100%;
        }
      }
    }
  }
`;

export const ContentSectionTwo = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.padding_container_default};

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 3rem;
    max-width: ${({ theme }) => theme.spacing.max_width};
    margin: 0 auto;
  }
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
  background-color: ${({ theme }) => theme.colors.medium_white};
  padding: 8rem 2rem;

  > section {
    text-align: center;

    > h2 {
      font-size: 3rem;
      font-weight: 400;
      margin-bottom: 2rem;/
    }

    > div {
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 1000px) {
        flex-wrap: wrap;
      }
    }
  }
`;

export const ContentCardsDetailsSafe = styled.div`
  background-color: ${({ theme }) => theme.colors.secundary};
  padding: ${({ theme }) => theme.spacing.padding_container_default};

  > section {
    h2 {
      text-align: center;
      font-size: 4rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.white};
    }

    > div {
      margin-top: 5rem;

      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: space-around;
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
