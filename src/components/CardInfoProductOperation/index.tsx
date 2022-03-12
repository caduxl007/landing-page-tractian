import { HTMLAttributes } from 'react';
import * as S from './styles';

interface CardInfoProductOperationProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  text: string;
  image_url: string;
  number: number;
  selected_number: number;
  handleSelectCard: (number: number, image: string) => void;
}

export function CardInfoProductOperation({
  title,
  text,
  image_url,
  number,
  selected_number,
  handleSelectCard,
  ...rest
}: CardInfoProductOperationProps) {
  return (
    <S.Container
      onClick={() => handleSelectCard(number, image_url)}
      active={number === selected_number}
      {...rest}
    >
      <span>{number}</span>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </S.Container>
  );
}
