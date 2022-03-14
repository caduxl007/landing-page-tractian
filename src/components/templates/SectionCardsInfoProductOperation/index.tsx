import { CardInfoProductOperation } from 'components';
import Image from 'next/image';
import { useState } from 'react';
import {
  management,
  monitoring
} from 'utils/mocks';
import * as S from './styles';

export function SectionCardsInfoProductOperation() {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [selectedTypeInfo, setSelectedTypeInfo] = useState('monitoring');
  const [selectedImage, setSelectedImage] = useState(monitoring[0].image_url);

  function handleSelectCard(number: number, image: string) {
    setSelectedNumber(number);
    setSelectedImage(image);
  }

  function handleSelectTypeCard(type: string) {
    setSelectedTypeInfo(type);
    setSelectedNumber(1);

    if (type === 'monitoring') {
      setSelectedImage(monitoring[0].image_url);
    } else {
      setSelectedImage(management[0].image_url);
    }
  }

  return (
    <S.Container>
      <h2>Como funciona?</h2>
      <p>Combine monitoramento e gestão, escolha:</p>

      <S.ContentButtons>
        <button
          className={selectedTypeInfo === 'monitoring' ? 'active' : ''}
          onClick={() => handleSelectTypeCard('monitoring')}
        >
          Monitoramento Online
        </button>

        <button
          className={selectedTypeInfo === 'management' ? 'active' : ''}
          onClick={() => handleSelectTypeCard('management')}
        >
          Gestão de Ativos
        </button>
      </S.ContentButtons>

      <div>
        <S.ContentCards>
          {selectedTypeInfo === 'monitoring' ? (
            <>
              {monitoring.map((data) => (
                <CardInfoProductOperation
                  key={data.id}
                  number={data.id}
                  title={data.title}
                  text={data.text}
                  selected_number={selectedNumber}
                  image_url={data.image_url}
                  handleSelectCard={handleSelectCard}
                />
              ))}
            </>
          ) : (
            <>
              {management.map((data) => (
                <CardInfoProductOperation
                  key={data.id}
                  number={data.id}
                  title={data.title}
                  text={data.text}
                  selected_number={selectedNumber}
                  image_url={data.image_url}
                  handleSelectCard={handleSelectCard}
                />
              ))}
            </>
          )}
        </S.ContentCards>

        <S.ContentImage>
          <Image src={selectedImage} width={600} height={400} alt="Tractian" />
        </S.ContentImage>
      </div>
    </S.Container>
  );
}
