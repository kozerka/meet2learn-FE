import { SectionContainer } from '../../../components/ui/Containers';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteNote } from '../../../store/slices/noteSlice';
import { cutText } from '../../../utils/cutText';
import {
	Content,
	DateContainer,
	IconContainer,
	NotesGrid,
	NoteContainer,
	Tag,
	Title,
} from './AllNotes.styled';

const AllNotes = () => {
	const { notes, isLoading } = useSelector(state => state.notes);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleEdit = noteId => {
		navigate(`/dashboard/my-notes/${noteId}/edit`);
	};

	const handleDelete = noteId => {
		dispatch(deleteNote(noteId));
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<SectionContainer>
			<NotesGrid>
				{notes.map(note => (
					<NoteContainer key={note._id}>
						<Title>{note.title}</Title>
						<div>
							{note.tags && note.tags.map((tag, tagIndex) => <Tag key={tagIndex}>{tag}</Tag>)}
						</div>
						<Content>{cutText(note.content, 90)}</Content>
						<DateContainer>
							<p>created at {new Date(note.createdAt).toLocaleDateString()}</p>
							<p>updated at {new Date(note.updatedAt).toLocaleDateString()}</p>
						</DateContainer>
						<IconContainer>
							<FiEdit size={20} onClick={() => handleEdit(note._id)} />
							<FiTrash2 size={20} onClick={() => handleDelete(note._id)} />
						</IconContainer>
					</NoteContainer>
				))}
			</NotesGrid>
		</SectionContainer>
	);
};

export default AllNotes;
