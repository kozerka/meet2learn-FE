import * as Yup from 'yup';

export const uploadAvatarSchema = Yup.object({
	avatar: Yup.mixed()
		.required('File is required')
		.test('FILE_SIZE', 'File is too large', value => value && value.size <= 1 * 1024 * 1024)
		.test(
			'FILE_FORMAT',
			'Unsupported Format',
			value => value && ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)
		),
});
