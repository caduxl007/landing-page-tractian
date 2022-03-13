import Image from 'next/image';
import * as S from './styles';

//TO-DO: Aplicar efeito espelho

interface CardDetailProductProps {
  title: string;
  image_url: string;
  text: string;
}

export function CardDetailProduct({
  title,
  image_url,
  text,
}: CardDetailProductProps) {
  return (
    <S.Container>
      <Image src={image_url} width={400} height={320} alt={title} />

      <div>
        <h2>{title}</h2>

        <p>{text}</p>
      </div>
    </S.Container>
  );
}
