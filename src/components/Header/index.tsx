import { Button, NavLink } from 'components';
import { useState } from 'react';
import { FiList, FiX } from 'react-icons/fi';
import { NavButton } from './NavButton';
import * as S from './styles';
import { SwitchButtonTheme } from './SwitchButtonTheme';

export function Header() {
  const [activeSidebar, setActiveSidebar] = useState(false);

  // window.addEventListener('scroll', function (event) {
  //   var header = document.getElementById('header');

  //   if (!header) {
  //     return;
  //   }
  //   if (window.pageYOffset > 100) {
  //     header.style.background = '#007bff';
  //   } else {
  //     header.style.background = 'transparent';
  //   }
  // });

  return (
    <S.Container id="header">
      <div>
        <NavLink href="/">TRACTIAN</NavLink>

        <S.ContentNav activeSidebar={activeSidebar}>
          <nav>
            <NavButton>Soluções</NavButton>

            <NavButton>Sobre Nós</NavButton>

            <NavButton>Materiais Gratuitos</NavButton>

            <SwitchButtonTheme />
          </nav>

          <div>
            <NavLink href="">Área do Cliente</NavLink>

            <Button>Demonstração</Button>
          </div>
        </S.ContentNav>

        {activeSidebar ? (
          <FiX size={35} onClick={() => setActiveSidebar(false)} />
        ) : (
          <FiList size={35} onClick={() => setActiveSidebar(true)} />
        )}
      </div>
    </S.Container>
  );
}
