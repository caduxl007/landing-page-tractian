import {
  Button,
  CardBenefit,
  CardDetailProduct,
  CardFeedback,
  FormContact,
  NavLink,
  SectionCardsInfoProductOperation
} from 'components';
import Image from 'next/image';
import { feedbacks_users } from 'utils/mocks/feedbacks-users';
import * as S from './styles';

export function HomeTemplate() {
  return (
    <S.Container>
      <S.ContentSectionOne>
        <div>
          <section>
            <div>
              <h2>Monitoramento Online e Gestão de Ativos em um só lugar</h2>

              <p>
                Evite falhas nas suas máquinas e torne o tempo de inatividade
                uma coisa do passado com sistema preditivo da TRACTIAN.
              </p>

              <Button>Demonstração</Button>

              <p>
                Já é cliente?{' '}
                <b>
                  <NavLink href="">Acesse aqui</NavLink>
                </b>
              </p>
            </div>

            <aside>
              <Image
                src="/assets/company.svg"
                height={650}
                width={650}
                alt="company"
              />
            </aside>
          </section>
        </div>
      </S.ContentSectionOne>

      <S.ContentSectionTwo>
        <section>
          <CardDetailProduct />
        </section>
      </S.ContentSectionTwo>

      <S.ContentInfoProductOperation>
        <SectionCardsInfoProductOperation />
      </S.ContentInfoProductOperation>

      <S.ContentBenefits>
        <section>
          <h2>
            Confira as vantagens de escolher a <b>Tractian</b>!
          </h2>

          <div className="row1">
            <CardBenefit
              title="Manutenção Preditiva"
              text="Detecção automática de falhas, saúde do ativo em tempo real, confiabilidade e insights automáticos."
              className="box-down"
            />

            <CardBenefit
              title="Monitoramento Online"
              text="Sensor Tractian coleta dados de vibração, temperatura, horímetro e consumo de energia em tempo real."
            />

            <CardBenefit
              title="Setup Instantâneo"
              text="Solução Plug & Play, sem necessidade de WiFi industrial, comunicação via 3G/4G independente."
              className="box-down"
            />
          </div>

          <div className="row2">
            <CardBenefit
              title="CMMS Integrado"
              text="Automatize processos, ordens de serviço e tenha total controle sobre seus ativos e equipe."
            />
          </div>
        </section>
      </S.ContentBenefits>

      <S.ContentUsersFeedbacks>
        <section>
          <h2>O que nossos cliente dizem</h2>

          <div>
            {feedbacks_users.map((data) => (
              <CardFeedback
                key={data.id}
                name={data.name}
                image_url={data.image_url}
                feedback={data.feedback}
                role={data.role}
              />
            ))}
          </div>
        </section>
      </S.ContentUsersFeedbacks>

      <S.ContentForm>
        <FormContact />
      </S.ContentForm>
    </S.Container>
  );
}
