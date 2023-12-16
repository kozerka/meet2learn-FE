import { loginFormSchema } from './';

describe('Yup Schema Validation - Login Form', () => {
	test('should pass validation for a valid login form', async () => {
		const validData = {
			email: 'john.doe@example.com',
			password: 'ValidPassword123!',
		};

		try {
			await loginFormSchema.validate(validData);
		} catch (error) {
			throw new Error('Validation should have passed');
		}
	});

	test('should fail validation for an invalid email format', async () => {
		const invalidEmailFormat = {
			email: 'invalid-email',
			password: 'ValidPassword123!',
		};

		try {
			await loginFormSchema.validate(invalidEmailFormat);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Please enter a valid email');
		}
	});

	test('should fail validation for a missing email', async () => {
		const missingEmail = {
			password: 'ValidPassword123!',
		};

		try {
			await loginFormSchema.validate(missingEmail);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('User email is required');
		}
	});

	test('should fail validation for a missing password', async () => {
		const missingPassword = {
			email: 'john.doe@example.com',
		};

		try {
			await loginFormSchema.validate(missingPassword);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Password is required');
		}
	});
});
