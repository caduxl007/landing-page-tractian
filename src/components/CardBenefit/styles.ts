import styled from 'styled-components';

export const Container = styled.div`
  text-align: left;
  max-width: 34rem;
  height: auto;
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 4rem 3rem;
  margin: 3rem;
  box-shadow: ${({ theme }) => theme.colors.box_shadow};

  &.box-down {
    position: relative;
    top: 110px;
  }

  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.medium_gray};
  }

  @media (max-width: 1000px) {
    max-width: 60rem;

    &.box-down {
      top: 0;
    }
  }
`;
