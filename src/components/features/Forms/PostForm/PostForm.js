import PropTypes from 'prop-types';
import {
	Button,
	SectionTitle,
	FormContainer,
	FormField,
	StyledLabel,
	ErrorText,
	SelectStyled,
} from '../../../ui';
import JoditEditor from 'jodit-react';
import { usePostForm } from '../../../../hooks';

const PostForm = ({ initialPost, isEditing, categories }) => {
	const formik = usePostForm(initialPost, isEditing);

	const handleEditorChange = newContent => {
		formik.setFieldValue('text', newContent);
		formik.validateField('text');
	};

	const categoryOptions = categories.map(({ value, label }) => ({ value, label }));

	return (
		<FormContainer>
			<SectionTitle size={'big'} title={isEditing ? 'Edit Post' : 'Add New Post'} />
			<form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
				<FormField
					label={'Title'}
					type={'text'}
					name={'title'}
					errors={formik.errors}
					values={formik.values}
					touched={formik.touched}
					handleChange={formik.handleChange}
					handleBlur={formik.handleBlur}
				/>
				{formik.touched.text && formik.errors.text && <ErrorText>{formik.errors.text}</ErrorText>}
				<JoditEditor
					value={formik.values.text}
					onChange={handleEditorChange}
					onBlur={() => formik.handleBlur('text')}
					className={'my-jodit-editor'}
				/>

				<StyledLabel htmlFor={'category'}>Category</StyledLabel>
				<SelectStyled
					name={'category'}
					options={categoryOptions}
					value={categoryOptions.find(option => option.value === formik.values.category)}
					onChange={option => {
						formik.setFieldValue('category', option.value);
					}}
				/>
				{formik.touched.category && formik.errors.category && (
					<ErrorText>{formik.errors.category}</ErrorText>
				)}

				<Button $secondary type={'submit'}>
					{isEditing ? 'Update Post' : 'Create Post'}
				</Button>
			</form>
		</FormContainer>
	);
};

PostForm.propTypes = {
	initialPost: PropTypes.object,
	isEditing: PropTypes.bool,
	categories: PropTypes.array.isRequired,
};

export default PostForm;
