import Image from 'next/image';

import * as S from './styles';

export function CardDetailProduct() {
  return (
    <S.Container>
      <header>
        <h2>Software de Manutenção TracOS™</h2>
      </header>

      <div>
        <Image
          src="https://imgix.tractian.com/trac-os/cmms-presentation.png?auto=format&fit=max&w=640"
          width={400}
          height={320}
          alt="Software"
        />

        <p>
          O CMMS revolucionário para planejar, acompanhar métricas e conectar-se
          com sua equipe.
        </p>
      </div>
    </S.Container>
  );
}
