import NoteForm from '../../../components/features/NoteForm/NoteForm';
import { FormContainer } from '../../../components/ui/Containers';
import { SectionTitle } from '../../../components';
const AddNote = () => {
	return (
		<FormContainer>
			<SectionTitle size={'big'} title={'Add new note'} />
			<NoteForm isEditing={false} />
		</FormContainer>
	);
};

export default AddNote;
