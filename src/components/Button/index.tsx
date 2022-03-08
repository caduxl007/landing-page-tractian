import { ReactNode, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children }: ButtonProps) {
  return <S.Container>{children}</S.Container>;
}
