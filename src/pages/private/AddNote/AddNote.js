import { NoteForm } from '../../../components/features/Forms';
import { FormContainer, SectionTitle } from '../../../components/ui';

const AddNote = () => {
	return (
		<FormContainer>
			<SectionTitle size={'big'} title={'Add new note'} />
			<NoteForm isEditing={false} />
		</FormContainer>
	);
};

export default AddNote;
