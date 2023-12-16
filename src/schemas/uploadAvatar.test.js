import { uploadAvatarSchema } from './';

describe('Yup Schema Validation for uploadAvatarSchema', () => {
	test('should pass validation for a valid avatar file', async () => {
		const validFile = {
			avatar: {
				name: 'avatar.jpg',
				size: 500000,
				type: 'image/jpeg',
			},
		};

		try {
			await uploadAvatarSchema.validate(validFile);
		} catch (error) {
			throw new Error('Validation should have passed');
		}
	});

	test('should fail validation for a missing avatar file', async () => {
		const invalidFile = {};

		try {
			await uploadAvatarSchema.validate(invalidFile);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('File is required');
		}
	});

	test('should fail validation for an oversized avatar file', async () => {
		const invalidFile = {
			avatar: {
				name: 'avatar.jpg',
				size: 2000000,
				type: 'image/jpeg',
			},
		};

		try {
			await uploadAvatarSchema.validate(invalidFile);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors).toContain('File is too large');
		}
	});

	test('should fail validation for an unsupported avatar file format', async () => {
		const invalidFile = {
			avatar: {
				name: 'avatar.gif',
				size: 500000,
				type: 'image/gif',
			},
		};

		try {
			await uploadAvatarSchema.validate(invalidFile);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors).toContain('Unsupported Format');
		}
	});
});
