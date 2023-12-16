import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { NavigationLink } from './NavigationLink';

const MockIcon = () => <span data-testid={'mock-icon'}>Icon</span>;

describe('NavigationLink Component', () => {
	test('renders with icon and children', () => {
		render(
			<BrowserRouter>
				<NavigationLink icon={MockIcon} to={'/some-link'}>
					Link Text
				</NavigationLink>
			</BrowserRouter>
		);

		const linkElement = screen.getByTestId('mock-icon');
		const textElement = screen.getByText('Link Text');

		expect(linkElement).toBeInTheDocument();
		expect(textElement).toBeInTheDocument();
	});

	test('navigates to the correct link', () => {
		const { container } = render(
			<BrowserRouter>
				<NavigationLink icon={MockIcon} to={'/some-link'}>
					Link Text
				</NavigationLink>
			</BrowserRouter>
		);

		const linkElement = container.querySelector('a');
		userEvent.click(linkElement);
		expect(window.location.pathname).toBe('/some-link');
	});
	test('renders without crashing when no children provided', () => {
		render(
			<BrowserRouter>
				<NavigationLink icon={MockIcon} to={'/some-link'} />
			</BrowserRouter>
		);
		const linkElement = screen.getByTestId('mock-icon');
		expect(linkElement).toBeInTheDocument();
	});
});
