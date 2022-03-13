import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { CardDetailProduct } from '.';

describe('CardDetailProduct component', () => {
  it('renders correctly', () => {
    renderTheme(<CardDetailProduct title="Software" text="Novo software" image_url='/'/>);

    expect(screen.getByText('Software')).toBeInTheDocument();
    expect(screen.getByText('Novo software')).toBeInTheDocument();
  });
});
