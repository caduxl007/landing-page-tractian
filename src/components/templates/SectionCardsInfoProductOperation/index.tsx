import { CardInfoProductOperation } from 'components';
import Image from 'next/image';
import { useState } from 'react';
import * as S from './styles';

//TO-DO: Deixar tudo manual, criando constantes

export function SectionCardsInfoProductOperation() {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [selectedTypeInfo, setSelectedTypeInfo] = useState('monitoring');
  const [selectedImage, setSelectedImage] = useState(
    'https://imgix.tractian.com/lp-sensor/enviamos-o-sensor.png?auto=format&fit=max&w=1080',
  );

  function handleSelectCard(number: number, image: string) {
    setSelectedNumber(number);
    setSelectedImage(image);
  }

  function handleSelectTypeCard(type: string) {
    setSelectedTypeInfo(type);
    setSelectedNumber(1);

    if (type === 'monitoring') {
      setSelectedImage(
        'https://imgix.tractian.com/lp-sensor/enviamos-o-sensor.png?auto=format&fit=max&w=1080',
      );
    } else {
      setSelectedImage(
        'https://imgix.tractian.com/images/mobile-assets-tree.png?auto=format&fit=max&w=1200',
      );
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
              <CardInfoProductOperation
                number={1}
                title="Nós enviamos os sensores"
                text="Fazemos a entrega pelos Correios para o Brasil todo. Você recebe o sensor na sua empresa. Não necessita passar pelo Wi-Fi industrial e nem falar com a TI."
                selected_number={selectedNumber}
                image_url="https://imgix.tractian.com/lp-sensor/enviamos-o-sensor.png?auto=format&fit=max&w=1080"
                handleSelectCard={handleSelectCard}
              />
              <CardInfoProductOperation
                number={2}
                title="Nós enviamos os sensores"
                text="Fazemos a entrega pelos Correios para o Brasil todo. Você recebe o sensor na sua empresa. Não necessita passar pelo Wi-Fi industrial e nem falar com a TI."
                selected_number={selectedNumber}
                image_url="https://imgix.tractian.com/images/monitored-asset.png?auto=format&fit=max&w=1080"
                handleSelectCard={handleSelectCard}
              />

              <CardInfoProductOperation
                number={3}
                title="Nós enviamos os sensores"
                text="Fazemos a entrega pelos Correios para o Brasil todo. Você recebe o sensor na sua empresa. Não necessita passar pelo Wi-Fi industrial e nem falar com a TI."
                selected_number={selectedNumber}
                image_url="https://imgix.tractian.com/images/get-insights.png?auto=format&fit=max&w=1080"
                handleSelectCard={handleSelectCard}
              />
            </>
          ) : (
            <>
              <CardInfoProductOperation
                number={1}
                title="Nos envie sua lista Ativos, Locais e Usuários"
                text="Deixamos a plataforma pronta e organizada para você, preparando sua planta e seus ativos seguindo a disposição enviada para nós, bem como seus mantenedores cadastrados na plataforma."
                selected_number={selectedNumber}
                image_url="https://imgix.tractian.com/images/mobile-assets-tree.png?auto=format&fit=max&w=1200"
                handleSelectCard={handleSelectCard}
              />
              <CardInfoProductOperation
                number={2}
                title="Automatize seus Planos e Ordens de Serviço"
                text="Use procedimentos online para organizar checklists e inspeções. Sequenciar e planejar Ordens de Serviço preventivamente nunca foi tão fácil."
                selected_number={selectedNumber}
                image_url="https://imgix.tractian.com/images/automatic-os.png?auto=format&fit=max&w=1200"
                handleSelectCard={handleSelectCard}
              />

              <CardInfoProductOperation
                number={3}
                title="Substitua o Excel por completo"
                text="A plataforma vai abrir as Ordens de serviços e distribui-las conforme as automações configuradas, permitindo que toda a equipe de manutenção se preocupe apenas em executar suas atividades de rotina."
                selected_number={selectedNumber}
                image_url="https://imgix.tractian.com/images/replace-excell.png?auto=format&fit=max&w=1200"
                handleSelectCard={handleSelectCard}
              />
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
