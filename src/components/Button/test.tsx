import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { Button } from '.';

describe('Button component', () => {
  it('renders correctly', () => {
    renderTheme(<Button>Enviar</Button>);

    expect(screen.getByText('Enviar')).toBeInTheDocument();
  });
});
