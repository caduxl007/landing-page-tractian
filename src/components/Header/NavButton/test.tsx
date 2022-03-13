import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { NavButton } from '.';

describe('NavButton component', () => {
  it('renders correctly', () => {
    renderTheme(<NavButton>Enviar</NavButton>);

    expect(screen.getByText('Enviar')).toBeInTheDocument();
  });
});
