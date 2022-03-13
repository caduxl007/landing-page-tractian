import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

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
    margin: 0 auto;
    justify-content: space-between;
    max-width: ${({ theme }) => theme.spacing.max_width};

   > a:nth-of-type(1) {
      font-size: 3rem;
      font-weight: bold;
      text-shadow: 2px 2px 2px black;

      &:hover {
        color: white;
      }
    }

    nav {
      display: flex;
      gap: 3rem;

      align-items: center;
    }

    svg {
      display: none;
      cursor: pointer;
      transition: all 0.3s;
      color: ${({ theme }) => theme.colors.white};

      &:hover {
        color: ${({ theme }) => theme.colors.turquoise_blue};
      }

      @media (max-width: 1000px) {
        display: block;
        position: absolute;
        right: 20px;
      }
    }
  }
`;

type ContentNavProps = {
  activeSidebar: boolean;
};

export const ContentNav = styled.div<ContentNavProps>`
  align-items: center;
  display: flex;
  gap: 4rem;
  justify-content: space-around;
  width: 100%;
  animation: ${appearFromLeft} 0.5s;

  > div {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  @media (max-width: 1000px) {
    display: ${({ activeSidebar }) => (activeSidebar ? 'flex' : 'none')};
    flex-direction: column;

    justify-content: center;
    padding: 3rem;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary};

    nav {
      flex-direction: column;
    }

    > div {
      width: 100%;
      flex-direction: column;

      button {
        max-width: 80rem;
        width: 100%;
      }
    }
  }
`;
