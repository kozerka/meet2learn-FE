import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { StarRating } from './StarRating';

describe('StarRating Component', () => {
	const mockOnChangeRating = jest.fn();

	beforeEach(() => {
		render(<StarRating onChangeRating={mockOnChangeRating} />);
	});

	test('renders five stars', () => {
		const stars = screen.getAllByTestId(/star-/);
		expect(stars).toHaveLength(5);
	});

	test('changes rating on star click v1', () => {
		const thirdStar = screen.getByTestId('star-3');
		userEvent.click(thirdStar);
		expect(screen.getByText('Your rating is: 3')).toBeInTheDocument();
	});
	test('changes rating on star click v2', () => {
		const thirdStar = screen.getByTestId('star-1');
		userEvent.click(thirdStar);
		expect(screen.getByText('Your rating is: 1')).toBeInTheDocument();
	});
	test('changes star colors on hover', () => {
		const firstStar = screen.getByTestId('star-1');
		userEvent.hover(firstStar);
		expect(firstStar).toHaveStyle('color: rgba(255, 193, 7)');
		userEvent.unhover(firstStar);
		expect(firstStar).toHaveStyle('color: rga(228, 229, 233)');
	});

	test('calls onChangeRating function on star click', () => {
		const secondStar = screen.getAllByRole('radio')[1];
		userEvent.click(secondStar);
		expect(mockOnChangeRating).toHaveBeenCalledWith(2);
	});
});
