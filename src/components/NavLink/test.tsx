import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { NavLink } from '.';

describe('NavLink component', () => {
  it('renders correctly', () => {
    renderTheme(<NavLink href="/">Entrar</NavLink>);

    expect(screen.getByText('Entrar')).toBeInTheDocument();
  });
});
