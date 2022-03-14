import {
  CardBenefit,
  CardDetailProduct,
  CardDetailSafe,
  CardFeedback,
  FormContact,
  NavLink,
  SectionCardsInfoProductOperation
} from 'components';
import Image from 'next/image';
import {
  benefits_product,
  details_product_software,
  details_safe,
  feedbacks_users
} from 'utils/mocks';
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

              <p>
                Tem interesse?{' '}
                <b>
                  <NavLink href="#contact">Entre em contato!</NavLink>
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
          {details_product_software.map((data) => (
            <CardDetailProduct
              key={data.id}
              text={data.text}
              title={data.title}
              image_url={data.image_url}
            />
          ))}
        </section>
      </S.ContentSectionTwo>

      <S.ContentInfoProductOperation id="operation">
        <SectionCardsInfoProductOperation />
      </S.ContentInfoProductOperation>

      <S.ContentBenefits id="benefits">
        <section>
          <h2>
            Confira as vantagens de escolher a <b>Tractian</b>!
          </h2>

          {benefits_product.map((data) => (
            <div key={data.id} className={`row${data.id}`}>
              {data.benefits.map((dataBenenif) => (
                <CardBenefit
                  key={dataBenenif.id}
                  title={dataBenenif.title}
                  text={dataBenenif.text}
                  className={dataBenenif.class}
                />
              ))}
            </div>
          ))}
        </section>
      </S.ContentBenefits>

      <S.ContentCardsDetailsSafe>
        <section>
          <h2>Suas máquinas mais seguras</h2>

          <div>
            {details_safe.map((data) => (
              <CardDetailSafe
                key={data.id}
                title={data.title}
                text={data.text}
              />
            ))}
          </div>
        </section>
      </S.ContentCardsDetailsSafe>

      <S.ContentUsersFeedbacks id="feedback">
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

      <S.ContentForm id="contact">
        <FormContact />
      </S.ContentForm>
    </S.Container>
  );
}
