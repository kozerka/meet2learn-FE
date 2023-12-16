import { render, screen } from '@testing-library/react';
import { SectionTitle } from './SectionTitle';

describe('SectionTitle Component', () => {
	test('renders with default size', () => {
		render(<SectionTitle title={'Test Title'} />);
		const titleElement = screen.getByText('Test Title');

		expect(titleElement).toBeInTheDocument();
		expect(titleElement).toHaveStyle('font-size: 1.3rem');
	});

	test('renders with big size', () => {
		render(<SectionTitle title={'Test Title'} size={'big'} />);
		const titleElement = screen.getByText('Test Title');
		expect(titleElement).toBeInTheDocument();
		expect(titleElement).toHaveStyle('font-size: 1.5rem');
	});

	test('prop validation', () => {
		const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		render(<SectionTitle title={'Test Title'} size={'big'} />);
		consoleErrorSpy.mockRestore();
	});

	test('default size when size prop is not provided', () => {
		render(<SectionTitle title={'Test Title'} />);
		const titleElement = screen.getByText('Test Title');
		expect(titleElement).toBeInTheDocument();
		expect(titleElement).toHaveStyle('font-size: 1.3rem');
	});
	test('renders without title', () => {
		render(<SectionTitle />);
		const titleElement = screen.queryByText('Test Title');
		expect(titleElement).toBeNull();
	});
	test('reacts to size changes', () => {
		const { rerender } = render(<SectionTitle title={'Test Title'} size={'big'} />);
		let titleElement = screen.getByText('Test Title');
		expect(titleElement).toHaveStyle('font-size: 1.5rem');
		rerender(<SectionTitle title={'Test Title'} size={'default'} />);
		titleElement = screen.getByText('Test Title');
		expect(titleElement).toHaveStyle('font-size: 1.3rem');
	});
});
