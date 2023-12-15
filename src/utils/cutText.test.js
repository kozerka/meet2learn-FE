import { cutText } from './cutText';

describe('cutText', () => {
	test('returns the original text if it is shorter than maxLength', () => {
		const text = 'Short';
		const maxLength = 10;
		expect(cutText(text, maxLength)).toBe(text);
	});

	test('cuts the text to maxLength and adds ... if it is longer than maxLength', () => {
		const text = 'This is a long text';
		const maxLength = 10;
		expect(cutText(text, maxLength)).toBe('This is a ...');
	});

	test('returns the original text if it is exactly maxLength', () => {
		const text = 'ExactLength';
		const maxLength = 11;
		expect(cutText(text, maxLength)).toBe(text);
	});
});
