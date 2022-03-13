import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { Header } from '.';

jest.mock('hooks/useTheme', () => {
  return {
    useTheme() {
      return {
        toggleTheme() {},
        theme: 'light',
      };
    },
  };
});

describe('Header component', () => {
  it('renders correctly', () => {
    renderTheme(<Header />);

    expect(screen.getByText('TRACTIAN')).toBeInTheDocument();
    expect(screen.getByText('Área do Cliente')).toBeInTheDocument();
    expect(screen.getByText('Demonstração')).toBeInTheDocument();
  });
});
