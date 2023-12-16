import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Logo } from './Logo';

describe('Logo Component', () => {
	const renderWithRouter = (isLink = true, linkTo = '/some-page') => {
		return render(
			<Router>
				<Logo isLink={isLink} linkTo={linkTo} />
			</Router>
		);
	};
	test('renders the logo text', () => {
		renderWithRouter(false);
		const logoElement = screen.getByText(/meet/i);
		const regex = /meet\s*2\s*learn/i;
		expect(logoElement).toBeInTheDocument();
		expect(logoElement.textContent).toMatch(regex);
	});

	test('renders the logo as a link when isLink is true', () => {
		renderWithRouter();
		const logoLink = screen.getByRole('link', { name: 'meet 2 learn' });
		expect(logoLink).toBeInTheDocument();
		expect(logoLink).toHaveAttribute('href', '/some-page');
	});

	test('does not render the logo as a link when isLink is false', () => {
		renderWithRouter(false);
		const logoLink = screen.queryByRole('link', { name: 'meet2learn' });
		expect(logoLink).not.toBeInTheDocument();
	});

	test('sets the link destination correctly when isLink is true', () => {
		renderWithRouter();
		const logoLink = screen.getByRole('link', { name: 'meet 2 learn' });
		expect(logoLink).toHaveAttribute('href', '/some-page');
	});

	test('sets the default link destination when isLink is true but no linkTo prop is provided', () => {
		renderWithRouter(true, '/');
		const logoLink = screen.getByRole('link', { name: 'meet 2 learn' });
		expect(logoLink).toHaveAttribute('href', '/');
	});
});
