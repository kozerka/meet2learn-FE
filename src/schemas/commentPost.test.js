import { commentPostSchema } from './';

describe('Yup Schema Validation', () => {
	test('should validate a valid comment', async () => {
		const validComment = {
			comment: 'This is a valid comment',
		};

		try {
			await commentPostSchema.validate(validComment);
		} catch (error) {
			throw new Error('Validation should have passed');
		}
	});

	test('should fail validation for a missing comment', async () => {
		const invalidComment = {};

		try {
			await commentPostSchema.validate(invalidComment);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors).toContain('Comment is required');
		}
	});
});
