import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { useModal } from './';

const TestComponent = () => {
	const { isOpen, openModal, closeModal } = useModal();

	return (
		<div>
			{isOpen && <div>Modal is open</div>}
			<button onClick={openModal}>Open Modal</button>
			<button onClick={closeModal}>Close Modal</button>
		</div>
	);
};

jest.mock('./useModal');

describe('MyComponent with mocked useModal', () => {
	beforeEach(() => {
		useModal.mockReturnValue({
			isOpen: false,
			openModal: jest.fn(),
			closeModal: jest.fn(),
		});
	});

	test('opens modal on open button click', () => {
		render(<TestComponent />);
		const openModalMock = useModal().openModal;

		userEvent.click(screen.getByText('Open Modal'));
		expect(openModalMock).toHaveBeenCalled();
	});
	test('closes modal on close button click', () => {
		useModal.mockReturnValue({
			isOpen: true,
			openModal: jest.fn(),
			closeModal: jest.fn(),
		});

		render(<TestComponent />);
		const closeModalMock = useModal().closeModal;

		userEvent.click(screen.getByText('Close Modal'));
		expect(closeModalMock).toHaveBeenCalled();
	});
	test('renders modal as open when isOpen is true', () => {
		useModal.mockReturnValue({
			isOpen: true,
			openModal: jest.fn(),
			closeModal: jest.fn(),
		});

		render(<TestComponent />);
		expect(screen.getByText('Modal is open')).toBeInTheDocument();
	});
	test('does not render modal when isOpen is false', () => {
		useModal.mockReturnValue({
			isOpen: false,
			openModal: jest.fn(),
			closeModal: jest.fn(),
		});

		render(<TestComponent />);
		expect(screen.queryByText('Modal is open')).not.toBeInTheDocument();
	});
});
