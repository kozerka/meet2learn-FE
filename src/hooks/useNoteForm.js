import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { createNote, updateNote } from '../store/thunks';
import { noteSchema } from '../schemas';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const useNoteForm = (initialNote, isEditing) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = async values => {
		try {
			const formattedTags = values.tags.map(tag => (typeof tag === 'string' ? tag : tag.value));
			const noteData = { ...values, tags: formattedTags };

			if (isEditing) {
				await dispatch(updateNote({ id: initialNote._id, updateData: noteData })).unwrap();
				toast.success('Note updated successfully');
			} else {
				await dispatch(createNote(noteData)).unwrap();
				toast.success('Note created successfully');
			}

			navigate('..');
		} catch (error) {
			toast.error('Error: ' + error.message);
		}
	};

	return useFormik({
		initialValues: isEditing
			? {
					title: initialNote.title || '',
					content: initialNote.content || '',
					tags: initialNote.tags || [],
			  }
			: { title: '', content: '', tags: [] },
		validationSchema: noteSchema,
		onSubmit,
	});
};
