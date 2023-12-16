import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button Component', () => {
	test('renders button with provided text', () => {
		render(<Button>Click Me</Button>);
		expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
	});

	test('triggers onClick event when clicked', () => {
		const handleClick = jest.fn();
		render(<Button onClick={handleClick}>Click Me</Button>);

		const button = screen.getByRole('button', { name: /click me/i });
		userEvent.click(button);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	test('is disabled when $disabled is true', () => {
		render(<Button $disabled>Disabled Button</Button>);
		expect(screen.getByRole('button', { name: /disabled button/i })).toBeDisabled();
	});
});
