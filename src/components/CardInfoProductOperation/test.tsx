import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { CardInfoProductOperation } from '.';

describe('CardInfoProductOperation component', () => {
  it('renders correctly', () => {
    const functionMock = jest.fn();

    renderTheme(
      <CardInfoProductOperation
        title="John Doe"
        text="New text"
        image_url="/"
        selected_number={1}
        number={1}
        handleSelectCard={functionMock}
      />,
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('New text')).toBeInTheDocument();
    expect(screen.getByText(1)).toBeInTheDocument();
  });

  it('is receiving active class', () => {
    const functionMock = jest.fn();

    const { container } = renderTheme(
      <CardInfoProductOperation
        title="John Doe"
        text="New text"
        image_url="/"
        selected_number={1}
        number={1}
        handleSelectCard={functionMock}
      />,
    );

    const element = container.querySelector('div');

    expect(element).toHaveClass('active');
  });

  it('is not receiving active class', () => {
    const functionMock = jest.fn();

    const { container } = renderTheme(
      <CardInfoProductOperation
        title="John Doe"
        text="New text"
        image_url="/"
        selected_number={2}
        number={1}
        handleSelectCard={functionMock}
      />,
    );

    const element = container.querySelector('div');

    expect(element).not.toHaveClass('active');
  });

  it('verify execut function on click element', async () => {
    const functionMock = jest.fn();

    renderTheme(
      <CardInfoProductOperation
        title="John Doe"
        text="New text"
        image_url="/"
        selected_number={1}
        number={1}
        handleSelectCard={functionMock}
      />,
    );

    fireEvent.click(screen.getByText('John Doe'));

    expect(functionMock).toHaveBeenCalledTimes(1);
    expect(functionMock).toHaveBeenCalledWith(1, '/');
  });
});
