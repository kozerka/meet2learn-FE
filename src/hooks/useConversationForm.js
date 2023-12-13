import { useFormik } from 'formik';
import { conversationSchema } from '../schemas';

export const useConversationForm = onSubmit => {
	return useFormik({
		initialValues: { conversationText: '' },
		validationSchema: conversationSchema,
		onSubmit: (values, { resetForm }) => {
			onSubmit(values.conversationText);
			resetForm();
		},
	});
};
