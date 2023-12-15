import { formatDate, formatDateSimple } from './formatDate';

describe('Date Formatting Tests', () => {
	const OriginalDateTimeFormat = Intl.DateTimeFormat;

	beforeAll(() => {
		Intl.DateTimeFormat = function (locale, options) {
			return new OriginalDateTimeFormat('pl-PL', options);
		};
	});

	afterAll(() => {
		Intl.DateTimeFormat = OriginalDateTimeFormat;
	});

	test('formatDate should format date with time components in Polish locale', () => {
		const dateString = '2023-03-15T12:30:45';
		expect(formatDate(dateString)).toBe('15.03.2023, 12:30:45');
	});

	test('formatDateSimple should format date without time components in Polish locale', () => {
		const dateString = '2023-03-15';
		expect(formatDateSimple(dateString)).toBe('15.03.2023');
	});
});
