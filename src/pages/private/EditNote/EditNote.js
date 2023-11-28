import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NoteForm from '../../../components/features/NoteForm/NoteForm';

const EditNote = () => {
	const { id } = useParams();
	const notes = useSelector(state => state.notes.notes);
	// TODO  const dispatch = useDispatch();

	const noteToEdit = notes.find(note => note.id === id);

	if (!noteToEdit) {
		return <div>Note not found</div>;
	}

	return <NoteForm initialNote={noteToEdit} isEditing={true} />;
};

export default EditNote;
