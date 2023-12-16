import { render, screen } from '@testing-library/react';
import { IntersectionTitle } from './IntersectionTitle';

describe('IntersectionTitle Component', () => {
	test('renders title and text correctly', () => {
		const title = 'Lorem Ipsum';
		const text = 'Dolor sit amet';
		render(<IntersectionTitle title={title} text={text} />);
		const titleElement = screen.getByText(title);
		const textElement = screen.getByText(text);
		expect(titleElement).toBeInTheDocument();
		expect(textElement).toBeInTheDocument();
	});
	test('renders when title is missing', () => {
		const text = 'Dolor sit amet';
		render(<IntersectionTitle text={text} />);
		const textElement = screen.getByText(text);
		expect(textElement).toBeInTheDocument();
	});

	test('renders when text is missing', () => {
		const title = 'Lorem Ipsum';
		render(<IntersectionTitle title={title} />);
		const titleElement = screen.getByText(title);
		expect(titleElement).toBeInTheDocument();
	});
});
