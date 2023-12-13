import PropTypes from 'prop-types';
import { Button, FormField } from '../../../ui';
import { useCommentForm } from '../../../../hooks';

const CommentForm = ({ postId, userId }) => {
	const { handleSubmit, errors, touched, handleChange, handleBlur, values } = useCommentForm(
		postId,
		userId
	);
	return (
		<form onSubmit={handleSubmit}>
			<FormField
				label={'Comment'}
				name={'comment'}
				type={'textarea'}
				rows={4}
				errors={errors}
				touched={touched}
				handleChange={handleChange}
				handleBlur={handleBlur}
				values={values}
			/>
			<Button $small type={'submit'}>
				Submit
			</Button>
		</form>
	);
};

CommentForm.propTypes = {
	postId: PropTypes.string.isRequired,
	userId: PropTypes.string.isRequired,
};

export default CommentForm;
