import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ErrorText } from '../../ui/ErrorText.styled';
import ImgPreview from '../../ImgPreview';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { uploadAvatar, fetchUser } from '../../../store/slices/userSlice';

const UploadForm = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(state => state.user.isLoading);

	const handleAvatarUpload = async file => {
		const formData = new FormData();
		formData.append('file', file);

		try {
			await dispatch(uploadAvatar(formData)).unwrap();
			toast.success('Avatar uploaded successfully');
			dispatch(fetchUser());
		} catch (error) {
			toast.error('Error uploading avatar: ' + error.message);
		}
	};
	const { handleSubmit, setFieldValue, errors, values } = useFormik({
		initialValues: {
			avatar: null,
		},
		validationSchema: Yup.object({
			avatar: Yup.mixed()
				.required('File is required')
				.test('FILE_SIZE', 'File is too large', value => value && value.size <= 1 * 1024 * 1024)
				.test(
					'FILE_FORMAT',
					'Unsupported Format',
					value => value && ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)
				),
		}),
		onSubmit: async values => {
			if (values.avatar) {
				await handleAvatarUpload(values.avatar);
			}
		},
	});
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					style={{ marginBottom: '1rem' }}
					type={'file'}
					name={'avatar'}
					onChange={e => setFieldValue('avatar', e.target.files[0])}
				/>
				{errors.avatar && <ErrorText>{errors.avatar}</ErrorText>}
				<button type={'submit'}>Upload</button>
			</form>

			{isLoading ? <p>Loading img...</p> : values.avatar && <ImgPreview file={values.avatar} />}
		</div>
	);
};

export default UploadForm;
