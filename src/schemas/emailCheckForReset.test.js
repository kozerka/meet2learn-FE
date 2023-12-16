import { emailCheckForResetSchema } from './';

describe('Yup Schema Validation - Email Check for Password Reset', () => {
	test('should pass validation for a valid email', async () => {
		const validData = {
			email: 'user@example.com',
		};

		try {
			await emailCheckForResetSchema.validate(validData);
		} catch (error) {
			throw new Error('Validation should have passed');
		}
	});

	test('should fail validation for missing email', async () => {
		const missingEmail = {};

		try {
			await emailCheckForResetSchema.validate(missingEmail);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('User email is required');
		}
	});

	test('should fail validation for an invalid email format', async () => {
		const invalidEmail = {
			email: 'invalid-email',
		};

		try {
			await emailCheckForResetSchema.validate(invalidEmail);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Please enter a valid email');
		}
	});
});
