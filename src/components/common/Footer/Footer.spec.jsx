import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer component', () => {
  it('renders footer component', async () => {
    const { findByRole, findByText, findByTestId } = screen;
    render(<Footer />);

    const footerElement = await findByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();

    const nameElement = await findByText(/Walber Vaz/i);
    expect(nameElement).toBeInTheDocument();

    const linkElement = await findByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute(
      'href',
      'https://github.com/walber-vaz',
    );
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');

    const yearElement = await findByTestId('footer-year');
    expect(yearElement).toHaveClass(
      'ml-1 transition duration-500 hover:text-blue-700',
    );
    expect(yearElement).toHaveTextContent(new Date().getFullYear().toString());
  });
});
