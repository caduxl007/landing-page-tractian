import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { Footer } from '.';

describe('Footer component', () => {
  it('renders correctly', () => {
    renderTheme(<Footer />);

    expect(screen.getByText('Investidores')).toBeInTheDocument();
    expect(screen.getByText('Reconhecimento')).toBeInTheDocument();
  });
});
