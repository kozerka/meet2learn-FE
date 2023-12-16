import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NavigationMenu } from './NavigationMenu';

const sampleLinks = [
	{
		icon: jest.fn(),
		to: '/link1',
		text: 'Link 1',
	},
	{
		icon: jest.fn(),
		to: '/link2',
		text: 'Link 2',
	},
];

describe('NavigationMenu Component', () => {
	test('renders navigation links', () => {
		render(
			<BrowserRouter>
				<NavigationMenu links={sampleLinks} />
			</BrowserRouter>
		);

		for (const link of sampleLinks) {
			expect(screen.getByText(link.text)).toBeInTheDocument();
		}
	});

	test('renders correct number of navigation links', () => {
		render(
			<BrowserRouter>
				<NavigationMenu links={sampleLinks} />
			</BrowserRouter>
		);
		const links = screen.getAllByRole('link');
		expect(links).toHaveLength(sampleLinks.length);
	});

	test('calls the icon component for each link', () => {
		render(
			<BrowserRouter>
				<NavigationMenu links={sampleLinks} />
			</BrowserRouter>
		);
		for (const link of sampleLinks) {
			expect(link.icon).toHaveBeenCalledTimes(1);
		}
	});

	test('links have correct "to" prop', () => {
		render(
			<BrowserRouter>
				<NavigationMenu links={sampleLinks} />
			</BrowserRouter>
		);
		const links = screen.getAllByRole('link');
		for (let i = 0; i < links.length; i++) {
			expect(links[i]).toHaveAttribute('href', sampleLinks[i].to);
		}
	});
});
