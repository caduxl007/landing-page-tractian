import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import * as S from './styles';

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
}

export function NavLink({ children, href }: NavLinkProps) {
  return (
    <Link passHref href={href}>
      <S.Container href={href}>{children}</S.Container>
    </Link>
  );
}
