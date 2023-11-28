import { SectionContainer } from '../../../components/ui/Containers';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteNote } from '../../../store/slices/noteSlice';
import { cutText } from '../../../utils/cutText';

const NotesGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 3rem;
	margin: 0 auto;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const NoteContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 250px;
	height: 250px;
	background-color: ${({ theme }) => theme.background};
	padding: 1.2rem;
	border-radius: 10px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	position: relative;
	overflow: hidden;
`;

const Title = styled.h3`
	margin-top: 0;
`;

const Tag = styled.span`
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.textInverted};
	border-radius: 5px;
	padding: 4px;
	font-size: 0.8rem;
	margin-right: 5px;
`;

const Content = styled.p`
	margin-top: 20px;
`;

const IconContainer = styled.div`
	position: absolute;
	bottom: 20px;
	right: 20px;
	display: flex;
	gap: 10px;
`;

const DateContainer = styled.div`
	font-size: 0.8rem;
`;

const AllNotes = () => {
	const notes = useSelector(state => state.notes.notes);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleEdit = noteId => {
		navigate(`/my-notes/${noteId}/edit`);
		// TODO bedzie dzialac dopiero po polaczeniu a API - pobieranie dynamiczne z id
	};

	const handleDelete = noteId => {
		dispatch(deleteNote(noteId));
	};

	return (
		<SectionContainer>
			<NotesGrid>
				{notes.map((note, index) => (
					<NoteContainer key={index}>
						<Title>{note.title}</Title>
						<div>
							{note.tags && note.tags.map((tag, tagIndex) => <Tag key={tagIndex}>{tag.label}</Tag>)}
						</div>
						<Content>{cutText(note.content, 90)}</Content>
						<DateContainer>
							<p>created at</p>
							<p>updated at</p>
							{/* // TODO wyswietlenie daty z timestamps */}
						</DateContainer>
						<IconContainer>
							<FiEdit size={20} onClick={() => handleEdit(note.id)} />
							<FiTrash2 size={20} onClick={() => handleDelete(note.id)} />
						</IconContainer>
					</NoteContainer>
				))}
			</NotesGrid>
		</SectionContainer>
	);
};

export default AllNotes;
