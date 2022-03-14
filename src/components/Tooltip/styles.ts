import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  cursor: pointer;

  span {
    pointer-events: none;
    width: 16rem;
    background: ${({ theme }) => theme.colors.red};
    padding: 0.8rem;
    border-radius: 4px;
    font-size: 1.4rem;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;

    text-align: center;

    position: absolute;
    bottom: calc(100% + 12px);
    left: -40%;
    transform: translateX(-50%);

    color: ${({ theme }) => theme.colors.white};
    cursor: text;

    @media (min-width: 768px) {
      left: 50%;
    }

    &::before {
      pointer-events: visible;
      content: '';
      border-style: solid;
      border-color: ${({ theme }) => theme.colors.red} transparent;
      border-width: 6px 6px 0 6px;
      bottom: 2rem;
      top: 100%;
      position: absolute;
      left: 62%;
      transform: translateX(-50%);

      @media (min-width: 768px) {
        left: 50%;
      }
    }
  }

  &:hover span {
    opacity: 1;
    pointer-events: visible;
  }
`;
