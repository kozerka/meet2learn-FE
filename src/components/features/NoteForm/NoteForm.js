import { useFormik, ErrorMessage } from 'formik';
import CreatableReactSelect from 'react-select/creatable';
import FormField from '../Form/FormField';
import { StyledLabel } from '../Form/FormField.styled';
import Button from '../../ui/Button';
import { ButtonContainer } from '../../ui/Containers';
import { useDispatch } from 'react-redux';
import { createNote, updateNote } from '../../../store/slices/noteSlice';
import PropTypes from 'prop-types';
import { useNavigate, Link } from 'react-router-dom';
import { noteSchema } from '../../../schemas';

const NoteForm = ({ initialNote, isEditing }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const onSubmit = values => {
		const formattedTags = values.tags.map(tag => (typeof tag === 'string' ? tag : tag.value));

		const noteData = {
			...values,
			tags: formattedTags,
		};

		if (isEditing) {
			dispatch(
				updateNote({
					id: initialNote._id,
					updateData: noteData,
				})
			);
		} else {
			dispatch(createNote(noteData));
		}

		navigate('..');
	};
	const { handleSubmit, handleChange, handleBlur, setFieldValue, values, errors, touched } =
		useFormik({
			initialValues: isEditing ? initialNote : { title: '', content: '', tags: [] },
			validationSchema: noteSchema,
			onSubmit,
		});
	const handleTagChange = selectedOptions => {
		setFieldValue('tags', selectedOptions || []);
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
				touched={touched}
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
