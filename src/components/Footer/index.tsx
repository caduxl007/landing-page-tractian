import { NavLink } from 'components/NavLink';
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
            <NavLinkImage
              href="https://www.linkedin.com/company/tractian/"
              image_url="https://imgix.tractian.com/images/linkedin.png?auto=format&fit=max&w=32"
              alt="Linkedln"
            />

            <NavLinkImage
              href="https://www.facebook.com/tractian"
              image_url="https://imgix.tractian.com/images/facebook.png?auto=format&fit=max&w=32"
              alt="Facebook"
            />

            <NavLinkImage
              href="https://www.instagram.com/tractian/"
              image_url="https://imgix.tractian.com/images/instagram.png?auto=format&fit=max&w=32"
              alt="Instagram"
            />

            <NavLinkImage
              href="https://www.youtube.com/c/TRACTIAN"
              image_url="https://imgix.tractian.com/images/youtube.png?auto=format&fit=max&w=32"
              alt="Youtube"
            />
          </div>
        </S.FooterInfo>
      </div>
    </S.Container>
  );
}
