import { passwordChangeSchema } from './';

describe('Yup Schema Validation for passwordChangeSchema', () => {
	test('should pass validation for a valid password change form', async () => {
		const validFormData = {
			currentPassword: 'CurrentPass123!',
			newPassword: 'NewPass123!',
			confirmPassword: 'NewPass123!',
		};

		try {
			await passwordChangeSchema.validate(validFormData);
		} catch (error) {
			throw new Error('Validation should have passed');
		}
	});

	test('should fail validation for missing current password', async () => {
		const missingCurrentPassword = {
			newPassword: 'NewPass123!',
			confirmPassword: 'NewPass123!',
		};

		try {
			await passwordChangeSchema.validate(missingCurrentPassword);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Current password is required');
		}
	});

	test('should fail validation for a password that is too short', async () => {
		const shortPassword = {
			currentPassword: 'CurrentPass123!',
			newPassword: 'Short',
			confirmPassword: 'Short',
		};

		try {
			await passwordChangeSchema.validate(shortPassword);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Password must be at least 8 characters long');
		}
	});

	test('should fail validation for a password that does not meet complexity requirements', async () => {
		const weakPassword = {
			currentPassword: 'CurrentPass123!',
			newPassword: 'weakpassword',
			confirmPassword: 'weakpassword',
		};

		try {
			await passwordChangeSchema.validate(weakPassword);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe(
				'Password must include one lowercase letter, one uppercase letter, one number, and one special character'
			);
		}
	});

	test('should fail validation for mismatched passwords', async () => {
		const mismatchedPasswords = {
			currentPassword: 'CurrentPass123!',
			newPassword: 'NewPass123!',
			confirmPassword: 'MismatchedPassword123!',
		};

		try {
			await passwordChangeSchema.validate(mismatchedPasswords);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Passwords must match');
		}
	});

	test('should fail validation for missing new password', async () => {
		const missingNewPassword = {
			currentPassword: 'CurrentPass123!',
			confirmPassword: 'NewPass123!',
		};

		try {
			await passwordChangeSchema.validate(missingNewPassword);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Passwords must match');
		}
	});

	test('should fail validation for missing confirm password', async () => {
		const missingConfirmPassword = {
			currentPassword: 'CurrentPass123!',
			newPassword: 'NewPass123!',
		};

		try {
			await passwordChangeSchema.validate(missingConfirmPassword);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Confirm password is required');
		}
	});
});
