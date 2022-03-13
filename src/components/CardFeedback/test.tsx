import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { CardFeedback } from '.';

describe('CardFeedback component', () => {
  it('renders correctly', () => {
    renderTheme(
      <CardFeedback name="John Doe" feedback="nice" image_url="/" role="Dev" />,
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('"nice"')).toBeInTheDocument();
    expect(screen.getByText('Dev')).toBeInTheDocument();
  });
});
