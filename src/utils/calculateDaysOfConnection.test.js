import { calculateDaysOfConnection } from './calculateDaysOfConnection';

describe('calculateDaysOfConnection', () => {
	test("returns 1 days for today's date", () => {
		const today = new Date().toISOString().split('T')[0];
		expect(calculateDaysOfConnection(today)).toBe(1);
	});

	test('returns correct number of days for a date in the past', () => {
		const pastDate = new Date(new Date().setDate(new Date().getDate() - 10))
			.toISOString()
			.split('T')[0];
		expect(calculateDaysOfConnection(pastDate)).toBe(11);
	});

	test('returns a positive number for a date far in the past', () => {
		const oldDate = '2000-01-01';
		const daysSinceOldDate = Math.ceil((new Date() - new Date(oldDate)) / (1000 * 3600 * 24));
		expect(calculateDaysOfConnection(oldDate)).toBe(daysSinceOldDate);
	});
});
