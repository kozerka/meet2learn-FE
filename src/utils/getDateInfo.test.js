import { getDateInfo } from './getDateInfo';

describe('getDateInfo', () => {
	test('currentYear returns the current year', () => {
		const { currentYear } = getDateInfo();
		const expectedYear = new Date().getFullYear();
		expect(currentYear).toBe(expectedYear);
	});

	test('daysUntilEndOfYear returns a positive integer', () => {
		const { daysUntilEndOfYear } = getDateInfo();
		expect(daysUntilEndOfYear).toBeGreaterThan(0);
		expect(Number.isInteger(daysUntilEndOfYear)).toBeTruthy();
	});

	test('formatDate formats today’s date correctly', () => {
		const { formatDate, today } = getDateInfo();
		const expectedFormattedDate = new Date().toLocaleDateString('en-US', {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		});
		expect(formatDate(today)).toBe(expectedFormattedDate);
	});
	test('today is the current date', () => {
		const { today } = getDateInfo();
		const expectedToday = new Date();
		expect(today.getFullYear()).toBe(expectedToday.getFullYear());
		expect(today.getMonth()).toBe(expectedToday.getMonth());
		expect(today.getDate()).toBe(expectedToday.getDate());
	});
});
