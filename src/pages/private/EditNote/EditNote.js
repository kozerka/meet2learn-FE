import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NoteForm from '../../../components/features/NoteForm/NoteForm';
import { FormContainer } from '../../../components/ui/Containers';
import { SectionTitle } from '../../../components';

const EditNote = () => {
	const { id } = useParams();
	const notes = useSelector(state => state.notes.notes);

	const noteToEdit = notes.find(note => note._id === id);

	if (!noteToEdit) {
		return <div>Note not found</div>;
	}

	const transformedTags = noteToEdit.tags.map(tag => ({ value: tag, label: tag }));

	return (
		<FormContainer>
			<SectionTitle size={'big'} title={'Edit note'} />
			<NoteForm initialNote={{ ...noteToEdit, tags: transformedTags }} isEditing={true} />
		</FormContainer>
	);
};

export default EditNote;
