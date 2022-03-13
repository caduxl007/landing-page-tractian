import Image from 'next/image';
import { link_image_investors, link_image_recognition, redes_socials } from 'utils/mocks';
import { NavLinkImage } from './NavLinkImage';
import * as S from './styles';

export function Footer() {
  return (
    <S.Container>
      <div>
        <S.ContentNav>
          <div>
            <h4>Investidores</h4>
            <div>
              {link_image_investors.map((data) => (
                <Image
                  src={data.image_url}
                  key={data.id}
                  alt={data.name}
                  width={140}
                  height={60}
                />
              ))}
            </div>
          </div>

          <div>
            <h4>Reconhecimento</h4>
            <div>
              {link_image_recognition.map((data) => (
                <Image
                  src={data.image_url}
                  key={data.id}
                  alt={data.name}
                  width={80}
                  height={80}
                />
              ))}
            </div>
          </div>
        </S.ContentNav>

        <S.FooterInfo>
          <p>© Tractian Tecnologia Ltda CNPJ: 35.755.699/0001-84</p>

          <div>
            {redes_socials.map((data) => (
              <NavLinkImage
                key={data.id}
                href={data.url}
                image_url={data.image_url}
                alt={data.name}
              />
            ))}
          </div>
        </S.FooterInfo>
      </div>
    </S.Container>
  );
}
