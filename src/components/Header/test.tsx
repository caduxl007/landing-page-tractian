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

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/',
      };
    },
  };
});

describe('Header component', () => {
  it('renders correctly', () => {
    renderTheme(<Header />);

    expect(screen.getByText('TRACTIAN')).toBeInTheDocument();
    expect(screen.getByText('Como funciona?')).toBeInTheDocument();
    expect(screen.getByText('Vantagens')).toBeInTheDocument();
    expect(screen.getByText('O que dizem?')).toBeInTheDocument();
    expect(screen.getByText('Contato')).toBeInTheDocument();
  });
});
