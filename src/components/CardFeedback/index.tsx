import Image from 'next/image';
import * as S from './styles';


interface CardFeedbackProps {
  name: string;
  image_url: string;
  role: string;
  feedback: string;
}

export function CardFeedback({
  name,
  image_url,
  role,
  feedback,
}: CardFeedbackProps) {
  return (
    <S.Container>
      <i>{`"${feedback}"`}</i>

      <footer>
        <Image src={image_url} width={60} height={60} alt={name} />

        <div>
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </footer>
    </S.Container>
  );
}
