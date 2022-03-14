import styled, { css } from 'styled-components';
import { Tooltip } from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 45px;
  padding: 0 1.6rem;

  margin-bottom: 2.4rem;
  border-radius: 0.1rem;
  border: 2px solid #707070;
  background: ${({ theme }) => theme.colors.white};

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${({ theme }) => theme.colors.red};
    `}

  /* Se o input estiver focado, mude a cor do icone e da borda. A cor do icone esta conectado com color */
  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${({ theme }) => theme.colors.secundary};
    `}

  /* Se o input estiver preenchido, mude a cor do icone. A cor do icone esta conectado com color */
  ${(props) =>
    props.isFilled &&
    css`
      border-color: ${({ theme }) => theme.colors.secundary};
    `}

  > input {
    flex: 1;
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    border: none;
    color: #${({ theme }) => theme.colors.black};
    font-size: 1.4rem;

    ::placeholder {
      color: #${({ theme }) => theme.colors.black};
      font-size: 1.4rem;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 2rem;
  margin-right: 0.5rem;

  svg {
    margin: 0;
  }

  span {
    background: ${({ theme }) => theme.colors.red};
    color: #fff;

    &::before {
      border-color: ${({ theme }) => theme.colors.red} transparent;
    }
  }
`;

export const Label = styled.label`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  user-select: none;
  margin-bottom: 0.2rem;
`;
