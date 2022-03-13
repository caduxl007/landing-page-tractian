import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { CardBenefit } from '.';

describe('CardBenefit component', () => {
  it('renders correctly', () => {
    renderTheme(<CardBenefit title="Beneficio" text="Novo benefecio" />);

    expect(screen.getByText('Beneficio')).toBeInTheDocument();
    expect(screen.getByText('Novo benefecio')).toBeInTheDocument();
  });
});
