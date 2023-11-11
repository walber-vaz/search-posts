import { render, screen } from '@testing-library/react';
import InputSearch from '.';

describe('<InputSearch />', () => {
  it('should render InputSearch correctly', async () => {
    const searchValue = 'test';
    const onChange = jest.fn();

    render(<InputSearch searchValue={searchValue} onChange={onChange} />);

    const inputSearch = await screen.findByTestId('input-search');
    expect(inputSearch).toBeInTheDocument();
    expect(inputSearch).toHaveAttribute('type', 'search');
    expect(inputSearch).toHaveValue(searchValue);
    expect(inputSearch).toHaveClass('form-input');
    expect(inputSearch).toHaveClass('mb-2');
    expect(inputSearch).toHaveClass('w-full');
    expect(inputSearch).toHaveClass('rounded-xl');
    expect(inputSearch).toHaveClass('px-4');
    expect(inputSearch).toHaveClass('py-3');
    expect(inputSearch).toHaveClass('text-xl');
    expect(inputSearch).toHaveClass('md:w-1/2');
  });

  it('should memorize the component', async () => {
    const searchValue = 'test';
    const onChange = jest.fn();

    render(<InputSearch searchValue={searchValue} onChange={onChange} />);
    const primeiraContagemDeRenderizacao =
      await screen.findAllByTestId('input-search').rerenderCount;

    render(<InputSearch searchValue={searchValue} onChange={onChange} />);
    const segundaContagemDeRenderizacao =
      await screen.findAllByTestId('input-search').rerenderCount;

    expect(segundaContagemDeRenderizacao).toBe(primeiraContagemDeRenderizacao);
  });
});
