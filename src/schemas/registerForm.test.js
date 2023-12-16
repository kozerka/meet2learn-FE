import { registerFormSchema } from './';

describe('Yup Schema Validation for registerFormSchema', () => {
	test('should pass validation for a valid registration form', async () => {
		const validFormData = {
			name: 'ValidName123',
			email: 'validemail@example.com',
			password: 'ValidPassword123!',
			confirmPassword: 'ValidPassword123!',
			role: 'user',
			agreeTerms: true,
		};

		try {
			await registerFormSchema.validate(validFormData);
		} catch (error) {
			throw new Error('Validation should have passed');
		}
	});

	test('should fail validation for an invalid name', async () => {
		const invalidName = {
			name: 'Inval!d Name',
			email: 'validemail@example.com',
			password: 'ValidPassword123!',
			confirmPassword: 'ValidPassword123!',
			role: 'user',
			agreeTerms: true,
		};

		try {
			await registerFormSchema.validate(invalidName);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Name can not contain special characters or spaces');
		}
	});

	test('should fail validation for an invalid email', async () => {
		const invalidEmail = {
			name: 'ValidName123',
			email: 'invalidemail',
			password: 'ValidPassword123!',
			confirmPassword: 'ValidPassword123!',
			role: 'user',
			agreeTerms: true,
		};

		try {
			await registerFormSchema.validate(invalidEmail);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Invalid email format');
		}
	});

	test('should fail validation for an invalid password', async () => {
		const invalidPassword = {
			name: 'ValidName123',
			email: 'validemail@example.com',
			password: 'invalidpassword',
			confirmPassword: 'invalidpassword',
			role: 'user',
			agreeTerms: true,
		};

		try {
			await registerFormSchema.validate(invalidPassword);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe(
				'Password must include one lowercase letter, one uppercase letter, one number, and one special character'
			);
		}
	});

	test('should fail validation for passwords that do not match', async () => {
		const passwordsNotMatching = {
			name: 'ValidName123',
			email: 'validemail@example.com',
			password: 'ValidPassword123!',
			confirmPassword: 'MismatchedPassword',
			role: 'user',
			agreeTerms: true,
		};

		try {
			await registerFormSchema.validate(passwordsNotMatching);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Passwords must match');
		}
	});

	test('should fail validation for a missing role', async () => {
		const missingRole = {
			name: 'ValidName123',
			email: 'validemail@example.com',
			password: 'ValidPassword123!',
			confirmPassword: 'ValidPassword123!',
			role: '',
			agreeTerms: true,
		};

		try {
			await registerFormSchema.validate(missingRole);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Role is required');
		}
	});

	test('should fail validation for not agreeing to terms', async () => {
		const notAgreeingToTerms = {
			name: 'ValidName123',
			email: 'validemail@example.com',
			password: 'ValidPassword123!',
			confirmPassword: 'ValidPassword123!',
			role: 'user',
			agreeTerms: false,
		};

		try {
			await registerFormSchema.validate(notAgreeingToTerms);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('You must agree to the terms and conditions to register');
		}
	});
});
