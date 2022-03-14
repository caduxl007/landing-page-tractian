import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { Tooltip } from '.';

describe('Tooltip component', () => {
  it('renders correctly', () => {
    renderTheme(<Tooltip title="title">Tooltip</Tooltip>);

    expect(screen.getByText('Tooltip')).toBeInTheDocument();
  });
});
