import { ErrorMessage } from 'formik';
import CreatableReactSelect from 'react-select/creatable';
import { ButtonContainer, StyledLabel, Button, FormField } from '../../../ui';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useNoteForm } from '../../../../hooks';

const NoteForm = ({ initialNote, isEditing }) => {
	const {
		handleSubmit,
		handleChange,
		handleBlur,
		setFieldValue,
		setFieldTouched,
		values,
		errors,
		touched,
	} = useNoteForm(initialNote, isEditing);
	const handleTagChange = selectedOptions => {
		setFieldValue('tags', selectedOptions || []);
		setFieldTouched('tags', true);
	};
	return (
		<form onSubmit={handleSubmit} style={{ width: '100%' }}>
			<FormField
				label={'Title'}
				type={'text'}
				name={'title'}
				values={values}
				errors={errors}
				touched={touched}
				handleChange={handleChange}
				handleBlur={handleBlur}
			/>
			<StyledLabel htmlFor={'tags'}>Tags</StyledLabel>
			<CreatableReactSelect
				isMulti
				onChange={handleTagChange}
				options={values.tags}
				id={'tags'}
				value={values.tags}
				touched={!!touched.tags}
			/>
			{touched?.tags && errors?.tags && <ErrorMessage>{errors.tags}</ErrorMessage>}

			<FormField
				label={'Content'}
				type={'textarea'}
				rows={10}
				name={'content'}
				values={values}
				errors={errors}
				touched={touched}
				handleChange={handleChange}
				handleBlur={handleBlur}
			/>
			<ButtonContainer>
				<Button $primary type={'submit'}>
					Submit
				</Button>
				<Link to={'..'}>
					<Button $secondary type={'button'}>
						Cancel
					</Button>
				</Link>
			</ButtonContainer>
		</form>
	);
};

NoteForm.propTypes = {
	initialNote: PropTypes.object,
	isEditing: PropTypes.bool,
};

export default NoteForm;
