import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './styles';

interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function NavButton({ children, ...rest }: NavButtonProps) {
  return <S.Container {...rest}>{children}</S.Container>;
}
