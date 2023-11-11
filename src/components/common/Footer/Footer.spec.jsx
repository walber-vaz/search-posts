import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer component', () => {
  it('renders footer component', async () => {
    const { findByRole, findByText } = screen;
    render(<Footer />);

    // Testing if the footer component is rendered
    const footerElement = await findByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();

    // Testing if the name is rendered correctly
    const nameElement = await findByText(/Walber Vaz/i);
    expect(nameElement).toBeInTheDocument();

    // Testing if the link is rendered correctly
    const linkElement = await findByRole('link');
    expect(linkElement).toBeInTheDocument();

    // Testing if the link has the correct href attribute
    expect(linkElement).toHaveAttribute(
      'href',
      'https://github.com/walber-vaz',
    );

    // Testing if the link opens in a new tab
    expect(linkElement).toHaveAttribute('target', '_blank');

    // Testing if the link has the correct rel attribute
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');

    // Testing if the current year is rendered correctly
    const yearElement = await findByText(
      new RegExp(new Date().getFullYear().toString()),
    );
    expect(yearElement).toBeInTheDocument();
  });
});
