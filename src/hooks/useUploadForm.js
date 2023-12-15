import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { uploadAvatar, fetchUser } from '../store/thunks';
import { uploadAvatarSchema } from '../schemas';

export const useUploadForm = () => {
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

	const formik = useFormik({
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

	return { ...formik, isLoading };
};
