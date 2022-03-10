import { HTMLAttributes } from 'react';
import * as S from './styles';

interface CardBenefitProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  text: string;
}

export function CardBenefit({ title, text, ...rest }: CardBenefitProps) {
  return (
    <S.Container {...rest}>
      <h2>{title}</h2>

      <p>{text}</p>
    </S.Container>
  );
}
