import { conversationSchema } from './';

describe('Yup Schema Validation', () => {
	test('should pass validation for a valid conversation text', async () => {
		const validData = {
			conversationText: 'Valid message content',
		};

		try {
			await conversationSchema.validate(validData);
		} catch (error) {
			throw new Error('Validation should have passed');
		}
	});

	test('should fail validation for a too long conversation text', async () => {
		const invalidData = {
			conversationText: 'a'.repeat(501),
		};

		try {
			await conversationSchema.validate(invalidData);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Message cannot be longer than 500 characters');
		}
	});

	test('should fail validation for a missing conversation text', async () => {
		const invalidData = {};

		try {
			await conversationSchema.validate(invalidData);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Message is required');
		}
	});
});
