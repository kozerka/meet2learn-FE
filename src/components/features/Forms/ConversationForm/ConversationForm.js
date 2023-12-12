import PropTypes from 'prop-types';
import { Button, FormField } from '../../../ui';
import { useConversationForm } from '../../../../hooks';

const ConversationForm = ({ onSubmit, onCancel }) => {
	const { handleSubmit, errors, values, touched, handleChange, handleBlur } =
		useConversationForm(onSubmit);

	return (
		<form onSubmit={handleSubmit}>
			<FormField
				label={'Your Message'}
				type={'textarea'}
				name={'conversationText'}
				errors={errors}
				values={values}
				touched={touched}
				handleChange={handleChange}
				handleBlur={handleBlur}
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
