import { editProfileFormSchema } from './'; // Adjust the path as needed

describe('Yup Schema Validation', () => {
	test('should pass validation for a valid edit profile form', async () => {
		const validData = {
			name: 'John Doe',
			email: 'john.doe@example.com',
			firstName: 'John',
			lastName: 'Doe',
			age: 30,
			city: 'City',
			country: 'Country',
			about: 'About me',
			bio: 'Bio',
			subjects: [{ name: 'Subject 1' }],
			experiences: [{ description: 'Experience 1' }],
		};

		try {
			await editProfileFormSchema({ role: 'tutor' }).validate(validData);
		} catch (error) {
			throw new Error('Validation should have passed');
		}
	});

	test('should fail validation for a missing name', async () => {
		const invalidData = {
			email: 'john.doe@example.com',
			firstName: 'John',
			lastName: 'Doe',
			age: 30,
			city: 'City',
			country: 'Country',
			about: 'About me',
			bio: 'Bio',
			subjects: [{ name: 'Subject 1' }],
			experiences: [{ description: 'Experience 1' }],
		};

		try {
			await editProfileFormSchema({ role: 'tutor' }).validate(invalidData, {
				abortEarly: false,
			});
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors).toContain('Name is required');
		}
	});

	test('should fail validation for an invalid email', async () => {
		const invalidData = {
			name: 'John Doe',
			email: 'invalid-email',
			firstName: 'John',
			lastName: 'Doe',
			age: 30,
			city: 'City',
			country: 'Country',
			about: 'About me',
			bio: 'Bio',
			subjects: [{ name: 'Subject 1' }],
			experiences: [{ description: 'Experience 1' }],
		};

		try {
			await editProfileFormSchema({ role: 'tutor' }).validate(invalidData, {
				abortEarly: false,
			});
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors).toContain('Invalid email');
		}
	});

	test('should fail validation for a missing firstName', async () => {
		const invalidData = {
			name: 'John Doe',
			email: 'john.doe@example.com',
			lastName: 'Doe',
			age: 30,
			city: 'City',
			country: 'Country',
			about: 'About me',
			bio: 'Bio',
			subjects: [{ name: 'Subject 1' }],
			experiences: [{ description: 'Experience 1' }],
		};

		try {
			await editProfileFormSchema({ role: 'tutor' }).validate(invalidData, {
				abortEarly: false,
			});
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors).toContain('First name is required');
		}
	});
	test('should fail validation for an invalid age', async () => {
		const invalidData = {
			name: 'John Doe',
			email: 'john.doe@example.com',
			firstName: 'John',
			lastName: 'Doe',
			age: -10,
			city: 'City',
			country: 'Country',
			about: 'About me',
			bio: 'Bio',
			subjects: [{ name: 'Subject 1' }],
			experiences: [{ description: 'Experience 1' }],
		};

		try {
			await editProfileFormSchema({ role: 'tutor' }).validate(invalidData, {
				abortEarly: false,
			});
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors).toContain('Age must be positive');
		}
	});

	test('should fail validation for an invalid city', async () => {
		const invalidData = {
			name: 'John Doe',
			email: 'john.doe@example.com',
			firstName: 'John',
			lastName: 'Doe',
			age: 30,
			country: 'Country',
			about: 'About me',
			bio: 'Bio',
			subjects: [{ name: 'Subject 1' }],
			experiences: [{ description: 'Experience 1' }],
		};

		try {
			await editProfileFormSchema({ role: 'tutor' }).validate(invalidData, {
				abortEarly: false,
			});
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors).toContain('City is required');
		}
	});

	test('should fail validation for an invalid country', async () => {
		const invalidData = {
			name: 'John Doe',
			email: 'john.doe@example.com',
			firstName: 'John',
			lastName: 'Doe',
			age: 30,
			city: 'City',
			about: 'About me',
			bio: 'Bio',
			subjects: [{ name: 'Subject 1' }],
			experiences: [{ description: 'Experience 1' }],
		};

		try {
			await editProfileFormSchema({ role: 'tutor' }).validate(invalidData, {
				abortEarly: false,
			});
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors).toContain('Country is required');
		}
	});
	test('should fail validation for an about section that is too long', async () => {
		const invalidData = {
			name: 'John Doe',
			email: 'john.doe@example.com',
			firstName: 'John',
			lastName: 'Doe',
			age: 30,
			city: 'City',
			country: 'Country',
			about: 'a'.repeat(501),
			bio: 'Bio',
			subjects: [{ name: 'Subject 1' }],
			experiences: [{ description: 'Experience 1' }],
		};

		try {
			await editProfileFormSchema({ role: 'tutor' }).validate(invalidData, {
				abortEarly: false,
			});
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.message).toBe('Too Long!');
		}
	});

	test('should fail validation for an invalid bio section', async () => {
		const invalidData = {
			name: 'John Doe',
			email: 'john.doe@example.com',
			firstName: 'John',
			lastName: 'Doe',
			age: 30,
			city: 'City',
			country: 'Country',
			about: 'About me',
			bio: 'a'.repeat(501),
			subjects: [{ name: 'Subject 1' }],
			experiences: [{ description: 'Experience 1' }],
		};

		try {
			await editProfileFormSchema({ role: 'tutor' }).validate(invalidData, {
				abortEarly: false,
			});
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.message).toBe('Too Long!');
		}
	});

	test('should fail validation for missing subject name', async () => {
		const invalidData = {
			name: 'John Doe',
			email: 'john.doe@example.com',
			firstName: 'John',
			lastName: 'Doe',
			age: 30,
			city: 'City',
			country: 'Country',
			about: 'About me',
			bio: 'Bio',
			subjects: [{ name: '' }],
			experiences: [{ description: 'Experience 1' }],
		};

		try {
			await editProfileFormSchema({ role: 'tutor' }).validate(invalidData, {
				abortEarly: false,
			});
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Field is required - if empty just delete the line');
		}
	});

	test('should fail validation for missing experience description', async () => {
		const invalidData = {
			name: 'John Doe',
			email: 'john.doe@example.com',
			firstName: 'John',
			lastName: 'Doe',
			age: 30,
			city: 'City',
			country: 'Country',
			about: 'About me',
			bio: 'Bio',
			subjects: [{ name: 'Subject 1' }],
			experiences: [{ description: '' }],
		};

		try {
			await editProfileFormSchema({ role: 'tutor' }).validate(invalidData, {
				abortEarly: false,
			});
			throw new Error('Validation should have failed');
		} catch (error) {
			expect(error.errors[0]).toBe('Field is required - if empty just delete the line');
		}
	});
});
