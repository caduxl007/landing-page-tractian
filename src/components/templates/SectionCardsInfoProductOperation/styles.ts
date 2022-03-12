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

export const Container = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  > p,
  h2 {
    text-align: center;
  }

  h2 {
    font-size: 3rem;
  }

  > div {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export const ContentButtons = styled.div`
  margin: 2rem 0;
  > button {
    background-color: rgb(255, 255, 255, 0.3);
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: white;
    padding: 1rem;
    transition: all 0.2s;
    width: 50%;

    &:hover {
      background-color: rgb(255, 255, 255, 0.5);
    }

    &.active {
      background-color: ${({ theme }) => theme.colors.secundary};
    }
  }
`;

export const ContentCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ContentImage = styled.div`
  animation: ${appearFromLeft} 1s;
`;
