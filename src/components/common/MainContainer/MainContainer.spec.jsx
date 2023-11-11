import { render, screen } from '@testing-library/react';
import { MainContainer } from '.';

describe('MainContainer', () => {
  it('should render children and footer', async () => {
    const { findByRole, findByText } = screen;
    const children = 'children';

    render(<MainContainer>{children}</MainContainer>);
    expect(await findByText(children)).toBeInTheDocument();
    expect(await findByRole('contentinfo')).toBeInTheDocument();
  });
});
