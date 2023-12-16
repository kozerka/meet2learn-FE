import { contactFormSchema } from './';

describe('Yup Schema Validation', () => {
	test('should pass validation for a valid contact form', async () => {
		const validData = {
			username: 'JohnDoe',
			email: 'john.doe@example.com',
			messageTitle: 'Valid Title',
			messageBody: 'Valid message content',
			agreeTerms: true,
		};

		try {
			await contactFormSchema.validate(validData);
		} catch (error) {
			throw new Error('Validation should have passed');
		}
	});
	test('should fail validation for an invalid username', async () => {
		const invalidData = {
			username: 'Jo',
			email: 'john.doe@example.com',
			messageTitle: 'Valid Title',
			messageBody: 'Valid message content',
			agreeTerms: true,
		};

		let validationError;

		try {
			await contactFormSchema.validate(invalidData, { abortEarly: false });
		} catch (error) {
			validationError = error;
		}

		expect(validationError).toBeDefined();
		expect(validationError.errors).toContain('Username should be 3 characters long!');
	});

	test('should fail validation for an invalid email', async () => {
		const invalidData = {
			username: 'JohnDoe',
			email: 'invalid-email',
			messageTitle: 'Valid Title',
			messageBody: 'Valid message content',
			agreeTerms: true,
		};

		let validationError;

		try {
			await contactFormSchema.validate(invalidData, { abortEarly: false });
		} catch (error) {
			validationError = error;
		}

		expect(validationError).toBeDefined();
		expect(validationError.errors).toContain('Invalid email format');
	});

	test('should fail validation for an invalid messageTitle', async () => {
		const invalidData = {
			username: 'JohnDoe',
			email: 'john.doe@example.com',
			messageTitle: 'Ti',
			messageBody: 'Valid message content',
			agreeTerms: true,
		};

		let validationError;

		try {
			await contactFormSchema.validate(invalidData, { abortEarly: false });
		} catch (error) {
			validationError = error;
		}

		expect(validationError).toBeDefined();
		expect(validationError.errors).toContain('Title should be 3-80 characters long!');
	});

	test('should fail validation for an invalid messageBody', async () => {
		const invalidData = {
			username: 'JohnDoe',
			email: 'john.doe@example.com',
			messageTitle: 'Valid Title',
			messageBody: 'Short',
			agreeTerms: true,
		};

		let validationError;

		try {
			await contactFormSchema.validate(invalidData, { abortEarly: false });
		} catch (error) {
			validationError = error;
		}

		expect(validationError).toBeDefined();
		expect(validationError.errors).toContain('Message should be 15-500 characters long!');
	});

	test('should fail validation if agreeTerms is not checked', async () => {
		const dataWithoutAgreeTerms = {
			username: 'JohnDoe',
			email: 'john.doe@example.com',
			messageTitle: 'Valid Title',
			messageBody: 'Valid message content',
			agreeTerms: false,
		};

		let validationError;

		try {
			await contactFormSchema.validate(dataWithoutAgreeTerms, { abortEarly: false });
		} catch (error) {
			validationError = error;
		}

		expect(validationError).toBeDefined();
		expect(validationError.errors).toContain('Please agree to the processing of your data.');
	});
});
