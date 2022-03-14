import * as S from './styles';

interface CardDetailsSafeProps {
  title: string;
  text: string;
}

export function CardDetailSafe({ title, text }: CardDetailsSafeProps) {
  return (
    <S.Container>
      <h1>{title}</h1>
      <p>{text}</p>
    </S.Container>
  );
}
