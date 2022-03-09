import Image from 'next/image';

import { Button } from 'components/Button';
import { useTheme } from 'hooks/useTheme';

import * as S from './styles';
import { NavButton } from './NavButton';

export function Header() {
  const { toggleTheme } = useTheme();

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
      {/* <Image 
        src="https://imgix.tractian.com/images/Logo-Tractian.svg?auto=format&fit=max&w=256" 
        alt='Tractian'
        width={200}
        height={200}
        dang
        /> */}
      <div>
        <h2>TRACTIAN</h2>

        <nav>
          <NavButton>Soluções</NavButton>

          <NavButton>Sobre Nós</NavButton>

          <NavButton>Materiais Gratuitos</NavButton>
        </nav>
        <div>
          <a href="">Área do Cliente</a>

          <Button onClick={toggleTheme}>Demonstração</Button>
        </div>
      </div>
    </S.Container>
  );
}
