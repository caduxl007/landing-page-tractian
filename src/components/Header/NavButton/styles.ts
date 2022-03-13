import styled from 'styled-components';

export const Container = styled.button`
  transition: color 0.2s;

  display: inline-block;
  padding-bottom: 0.5rem;
  background: transparent;

  position: relative;
  color: white;

  &:hover {
    color: ${({theme}) => theme.colors.turquoise_blue};
  }

  /* &:hover::after {
    content: '';
    color: #4cf2e2;
    height: 3px;
    border-radius: 3px 3px 0 0;
    width: 100%;
    position: absolute;
    bottom: 1px;
    left: 0;
    background: #4cf2e2;
  } */
`;
