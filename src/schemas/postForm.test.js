import { postFormSchema } from './';

describe('Yup Schema Validation for postFormSchema', () => {
	test('should pass validation for a valid post form', async () => {
		const validFormData = {
			title: 'Valid Title',
			text: '<p>Valid content with more than 15 characters</p>',
		};

		try {
			await postFormSchema.validate(validFormData);
		} catch (error) {
			throw new Error('Validation should have passed');
		}
	});

	test('should fail validation for a title that is too short', async () => {
		const shortTitle = {
			title: 'Sh',
			text: '<p>Valid content with more than 15 characters</p>',
		};

		try {
			await postFormSchema.validate(shortTitle);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Title must be at least 3 characters');
		}
	});

	test('should fail validation for text content that is too short', async () => {
		const shortText = {
			title: 'Valid Title',
			text: '<p>Short</p>',
		};

		try {
			await postFormSchema.validate(shortText);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe(
				'Text in the editor must be at least 15 characters including spaces'
			);
		}
	});

	test('should fail validation for missing title', async () => {
		const missingTitle = {
			text: '<p>Valid content with more than 15 characters</p>',
		};

		try {
			await postFormSchema.validate(missingTitle);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Title is required');
		}
	});

	test('should pass validation for text content with exactly 15 characters', async () => {
		const textWith15Characters = {
			title: 'Valid Title',
			text: '<p>Exactly 15 chars</p>',
		};

		try {
			await postFormSchema.validate(textWith15Characters);
		} catch (error) {
			throw new Error('Validation should have passed');
		}
	});
});
