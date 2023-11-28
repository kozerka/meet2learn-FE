import NoteForm from '../../../components/features/NoteForm/NoteForm';
import { FormContainer } from '../../../components/ui/Containers';

const AddNote = () => {
	return (
		<FormContainer>
			<h2>New note</h2>
			<NoteForm isEditing={false} />
		</FormContainer>
	);
};

export default AddNote;
