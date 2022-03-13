import { NavLink } from 'components';
import { useTheme } from 'hooks/useTheme';
import { useEffect, useState } from 'react';
import { FiList, FiX } from 'react-icons/fi';
import * as S from './styles';
import { SwitchButtonTheme } from './SwitchButtonTheme';

export function Header() {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      const header = document.getElementById('header');

      if (!header) {
        return;
      }
      if (window.pageYOffset > 40) {
        header.style.background = theme.colors.header_scroll;
      } else {
        header.style.background = 'transparent';
      }
    });
  }, [theme]);

  return (
    <S.Container id="header">
      <div>
        <NavLink href="/">TRACTIAN</NavLink>

        <S.ContentNav activeSidebar={activeSidebar}>
          <nav>
            <NavLink href="#operation">Como funciona?</NavLink>

            <NavLink href="#benefits">Vantagens</NavLink>

            <NavLink href="#feedback">O que dizem?</NavLink>

            <NavLink href="#contact">Contato</NavLink>

          </nav>

          <div>
            <SwitchButtonTheme />
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
