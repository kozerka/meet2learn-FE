import DOMPurify from 'dompurify';
import { createMarkup } from './createMarkup';

DOMPurify.sanitize = input => `sanitized-${input}`;

describe('createMarkup', () => {
	test('sanitizes and returns object for basic HTML string', () => {
		const html = '<p>Test</p>';
		const result = createMarkup(html);
		expect(result).toEqual({ __html: `sanitized-${html}` });
	});

	test('sanitizes and returns object for an empty string', () => {
		const html = '';
		const result = createMarkup(html);
		expect(result).toEqual({ __html: `sanitized-${html}` });
	});

	test('sanitizes and returns object for complex HTML content', () => {
		const html = '<div><script>alert("danger")</script><p>Safe Content</p></div>';
		const result = createMarkup(html);
		expect(result).toEqual({ __html: `sanitized-${html}` });
	});
});
