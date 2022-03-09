import { Button, Header } from 'components';
import Image from 'next/image';

import * as S from './styles';

export function HomeTemplate() {
  return (
    <S.Container>
        <Header />
      <div>

        <section>
          <div>
            <h2>Monitoramento Online e Gestão de Ativos em um só lugar</h2>

            <p>
              Evite falhas nas suas máquinas e torne o tempo de inatividade uma
              coisa do passado com sistema preditivo da TRACTIAN.
            </p>

            <Button>Demonstração</Button>

            <p>
              Já é cliente? <a href="">Acesse aqui</a>
            </p>
          </div>

          <aside>
            <Image
              src="/assets/company.svg"
              height={750}
              width={750}
              alt="company"
            />
          </aside>
        </section>

        
      </div>
    </S.Container>
  );
}
