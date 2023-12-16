import { passwordResetSchema } from './passwordReset';

describe('Yup Schema Validation for passwordResetSchema', () => {
	test('should pass validation for a valid password reset form', async () => {
		const validFormData = {
			newPassword: 'ValidPass123!',
			confirmPassword: 'ValidPass123!',
		};

		try {
			await passwordResetSchema.validate(validFormData);
		} catch (error) {
			throw new Error('Validation should have passed');
		}
	});

	test('should fail validation for a password that is too short', async () => {
		const shortPassword = {
			newPassword: 'Short',
			confirmPassword: 'Short',
		};

		try {
			await passwordResetSchema.validate(shortPassword);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Password must be at least 8 characters long');
		}
	});

	test('should fail validation for a password that does not meet complexity requirements', async () => {
		const weakPassword = {
			newPassword: 'weakpassword',
			confirmPassword: 'weakpassword',
		};

		try {
			await passwordResetSchema.validate(weakPassword);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe(
				'Password must include one lowercase letter, one uppercase letter, one number, and one special character'
			);
		}
	});

	test('should fail validation for mismatched passwords', async () => {
		const mismatchedPasswords = {
			newPassword: 'Password123!',
			confirmPassword: 'MismatchedPassword123!',
		};

		try {
			await passwordResetSchema.validate(mismatchedPasswords);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Passwords must match');
		}
	});

	test('should fail validation for missing new password', async () => {
		const missingNewPassword = {
			confirmPassword: 'ValidPass123!',
		};

		try {
			await passwordResetSchema.validate(missingNewPassword, { abortEarly: false });
			throw new Error('Validation should have failed');
		} catch (error) {
			const newPasswordError = error.inner.find(e => e.path === 'newPassword');
			expect(newPasswordError.message).toBe('New password is required');
		}
	});

	test('should fail validation for missing confirm password', async () => {
		const missingConfirmPassword = {
			newPassword: 'ValidPass123!',
		};

		try {
			await passwordResetSchema.validate(missingConfirmPassword);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Confirm password is required');
		}
	});
});
