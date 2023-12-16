import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WelcomeMessage from './WelcomeMessage';
import * as reactRedux from 'react-redux';
import * as utils from '../../../utils';

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: jest.fn(),
}));

jest.mock('../../../utils', () => ({
	getDateInfo: jest.fn(),
}));

describe('WelcomeMessage', () => {
	const mockDateInfo = {
		formatDate: jest.fn(date => date.toDateString()),
		today: new Date(),
		daysUntilEndOfYear: 100,
		currentYear: 2023,
	};

	beforeEach(() => {
		utils.getDateInfo.mockReturnValue(mockDateInfo);
	});

	test('renders loader when user data is not available', () => {
		reactRedux.useSelector.mockReturnValue(null);

		render(<WelcomeMessage />);
		expect(screen.getByRole('status')).toBeInTheDocument();
	});

	test('displays welcome message with user name', () => {
		const mockUserData = { firstName: 'John', name: 'Doe' };
		reactRedux.useSelector.mockReturnValue(mockUserData);

		render(<WelcomeMessage />);
		expect(screen.getByText('Hello, John!')).toBeInTheDocument();
	});

	test('displays date information', () => {
		const mockUserData = { firstName: 'John', name: 'Doe' };
		reactRedux.useSelector.mockReturnValue(mockUserData);
		const mockDateInfo = {
			formatDate: jest.fn(date => date.toDateString()),
			today: new Date(),
			daysUntilEndOfYear: 100,
			currentYear: 2023,
		};
		utils.getDateInfo.mockReturnValue(mockDateInfo);

		render(<WelcomeMessage />);
		const dateParagraph = screen.getByText(/Today is/).closest('p');
		expect(dateParagraph.textContent).toContain(`Today is ${mockDateInfo.today.toDateString()}.`);
		const daysParagraph = screen.getByText(/There are/).closest('p');
		expect(daysParagraph.textContent).toMatch(
			new RegExp(
				`There are\\s*${mockDateInfo.daysUntilEndOfYear}\\s*days left until the end of\\s*${mockDateInfo.currentYear}\\.`
			)
		);
	});
});
