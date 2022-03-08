import { ReactNode } from 'react';
import * as S from './styles';

interface ButtonProps {
  children: ReactNode;
}

export function Button({ children }: ButtonProps) {
  return <S.Container>{children}</S.Container>;
}
