import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { CardDetailSafe } from '.';

describe('CardDetailSafe component', () => {
  it('renders correctly', () => {
    renderTheme(<CardDetailSafe title="Title" text="new text" />);

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('new text')).toBeInTheDocument();
  });
});
