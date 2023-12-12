import PropTypes from 'prop-types';
import { Button, FormField } from '../../ui';
import { useFormik } from 'formik';
import { conversationSchema } from '../../../schemas';

const ConversationForm = ({ onSubmit, onCancel }) => {
	const formik = useFormik({
		initialValues: { conversationText: '' },
		validationSchema: conversationSchema,
		onSubmit: (values, { resetForm }) => {
			onSubmit(values.conversationText);
			resetForm();
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<FormField
				label={'Your Message'}
				type={'textarea'}
				name={'conversationText'}
				errors={formik.errors}
				values={formik.values}
				touched={formik.touched}
				handleChange={formik.handleChange}
				handleBlur={formik.handleBlur}
				rows={5}
			/>

			<div>
				<Button $small type={'submit'}>
					Submit
				</Button>
				<Button $small onClick={onCancel}>
					Cancel
				</Button>
			</div>
		</form>
	);
};

ConversationForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
};

export default ConversationForm;
