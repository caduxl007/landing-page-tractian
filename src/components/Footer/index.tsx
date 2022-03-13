import { NavLink } from 'components/NavLink';
import { redes_socials } from 'utils/mocks';
import { NavLinkImage } from './NavLinkImage';
import * as S from './styles';

export function Footer() {
  return (
    <S.Container>
      <div>
        <S.ContentNav>
          <div>
            <h4>Navegação</h4>
            <nav>
              <NavLink href="">Sensor Tractian</NavLink>
              <NavLink href="">Plataforma</NavLink>
              <NavLink href="">Funcionalidades</NavLink>
              <NavLink href="">Planos e preços</NavLink>
            </nav>
          </div>

          <div>
            <h4>Navegação</h4>
            <nav>
              <NavLink href="">Sensor Tractian</NavLink>
              <NavLink href="">Plataforma</NavLink>
              <NavLink href="">Funcionalidades</NavLink>
              <NavLink href="">Planos e preços</NavLink>
            </nav>
          </div>

          <div>
            <h4>Navegação</h4>
            <nav>
              <NavLink href="">Sensor Tractian</NavLink>
              <NavLink href="">Plataforma</NavLink>
              <NavLink href="">Funcionalidades</NavLink>
              <NavLink href="">Planos e preços</NavLink>
            </nav>
          </div>

          <div>
            <h4>Navegação</h4>
            <nav>
              <NavLink href="">Sensor Tractian</NavLink>
              <NavLink href="">Plataforma</NavLink>
              <NavLink href="">Funcionalidades</NavLink>
              <NavLink href="">Planos e preços</NavLink>
            </nav>
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
