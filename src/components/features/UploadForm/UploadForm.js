import { useFormik } from 'formik';
import { ErrorText } from '../../ui/ErrorText.styled';
import ImgPreview from '../../ImgPreview';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { uploadAvatar, fetchUser } from '../../../store/thunks';
import { uploadAvatarSchema } from '../../../schemas';
import Button from '../../ui/Button';
import { FormStyled } from './UploadForm.styled';
import { LuFileImage } from 'react-icons/lu';
import { FormContainer } from '../../ui/Containers';
import Loader from '../../ui/Loader/Loader';

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
		validationSchema: uploadAvatarSchema,
		onSubmit: async values => {
			if (values.avatar) {
				await handleAvatarUpload(values.avatar);
			}
		},
	});
	return (
		<FormContainer>
			<FormStyled onSubmit={handleSubmit}>
				<label htmlFor={'avatar'}>
					Upload avatar <LuFileImage size={'1.5rem'} />
				</label>
				<input
					id={'avatar'}
					type={'file'}
					name={'avatar'}
					onChange={e => setFieldValue('avatar', e.target.files[0])}
				/>
				{errors.avatar && <ErrorText>{errors.avatar}</ErrorText>}
				<Button $secondary type={'submit'}>
					Upload
				</Button>
			</FormStyled>

			{!errors.avatar &&
				values.avatar &&
				(isLoading ? <Loader /> : <ImgPreview file={values.avatar} />)}
		</FormContainer>
	);
};

export default UploadForm;
