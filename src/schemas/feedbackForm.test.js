import { feedbackFormSchema } from './';
describe('Yup Schema Validation - Feedback Form', () => {
	test('should pass validation for a valid feedback form', async () => {
		const validData = {
			rating: 4,
			reviewText: 'This is a valid review.',
		};

		try {
			await feedbackFormSchema.validate(validData);
		} catch (error) {
			throw new Error('Validation should have passed');
		}
	});

	test('should fail validation for missing rating', async () => {
		const missingRating = {
			reviewText: 'This is a valid review.',
		};

		try {
			await feedbackFormSchema.validate(missingRating);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Rating is required!');
		}
	});

	test('should fail validation for an invalid rating (less than 1)', async () => {
		const invalidRating = {
			rating: 0,
			reviewText: 'This is a valid review.',
		};

		try {
			await feedbackFormSchema.validate(invalidRating);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Please give at least one star or cancel your feedback...');
		}
	});

	test('should fail validation for missing review text', async () => {
		const missingReviewText = {
			rating: 4,
		};

		try {
			await feedbackFormSchema.validate(missingReviewText);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Review text is required!');
		}
	});

	test('should fail validation for a review text that is too short', async () => {
		const invalidReviewText = {
			rating: 5,
			reviewText: 'Short',
		};

		try {
			await feedbackFormSchema.validate(invalidReviewText, { abortEarly: false });
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.inner[0].message).toBe('Review must be at least 10 characters');
		}
	});

	test('should pass validation for the minimum valid rating', async () => {
		const validData = {
			rating: 1,
			reviewText: 'This is a valid review.',
		};

		try {
			await feedbackFormSchema.validate(validData);
		} catch (error) {
			throw new Error('Validation should have passed');
		}
	});
	test('should pass validation for reviewText with exact maximum length', async () => {
		const validData = {
			rating: 4,
			reviewText: 'a'.repeat(500),
		};

		try {
			await feedbackFormSchema.validate(validData);
		} catch (error) {
			throw new Error('Validation should have passed');
		}
	});
	test('should fail validation for reviewText longer than maximum length', async () => {
		const invalidData = {
			rating: 4,
			reviewText: 'a'.repeat(501),
		};

		try {
			await feedbackFormSchema.validate(invalidData);
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Review must be at most 500 characters');
		}
	});
});
