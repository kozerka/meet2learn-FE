import { CustomContainer, SectionContainer } from '../../../components/ui/Containers';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { deleteNote, getUniqueTags } from '../../../store/slices/noteSlice';
import { cutText } from '../../../utils/cutText';
import Modal from '../../../components/ui/Modal/Modal';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import {
	Content,
	DateContainer,
	IconContainer,
	NotesGrid,
	NoteContainer,
	Tag,
	Title,
	TagsContainer,
} from './AllNotes.styled';
import { SectionTitle } from '../../../components';

const AllNotes = () => {
	const { notes, isLoading, uniqueTags } = useSelector(state => state.notes);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [selectedTag, setSelectedTag] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [noteToDelete, setNoteToDelete] = useState(null);

	useEffect(() => {
		dispatch(getUniqueTags());
	}, [dispatch]);

	const handleEdit = noteId => {
		navigate(`/dashboard/my-notes/${noteId}/edit`);
	};
	const handleDeleteClick = noteId => {
		setNoteToDelete(noteId);
		setIsModalOpen(true);
	};

	const confirmDelete = async () => {
		if (noteToDelete) {
			try {
				await dispatch(deleteNote(noteToDelete)).unwrap();
				toast.success('Note deleted successfully');
			} catch (error) {
				toast.error('Error deleting note: ' + error.message);
			}
			setNoteToDelete(null);
			setIsModalOpen(false);
		}
	};

	const handleTagChange = selectedOption => {
		setSelectedTag(selectedOption ? selectedOption.value : '');
	};

	const filteredNotes = selectedTag ? notes.filter(note => note.tags.includes(selectedTag)) : notes;

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (notes.length === 0) {
		return (
			<CustomContainer>
				<SectionTitle size={'big'} title={'All Notes'} />
				You have no notes yet. Create one!
			</CustomContainer>
		);
	}

	return (
		<CustomContainer>
			<SectionTitle size={'big'} title={'All Notes'} />
			<Select
				options={uniqueTags.map(tag => ({ value: tag, label: tag }))}
				onChange={handleTagChange}
				placeholder={'Filter by tag'}
				isClearable
			/>
			<SectionContainer>
				<NotesGrid>
					{filteredNotes.map(note => {
						const createdAt = new Date(note.createdAt).toLocaleDateString();
						const updatedAt = new Date(note.updatedAt).toLocaleDateString();
						const showReadMore = note.content.length > 90;
						const displayedText = cutText(note.content, 90);
						return (
							<NoteContainer key={note._id}>
								<Title>{note.title}</Title>
								<TagsContainer>
									{note.tags && note.tags.map((tag, tagIndex) => <Tag key={tagIndex}>{tag}</Tag>)}
								</TagsContainer>
								<Content>
									{displayedText}
									{showReadMore && <Link to={`/dashboard/my-notes/${note._id}`}>Read More</Link>}
								</Content>

								<DateContainer>
									<p>created at {createdAt}</p>
									{createdAt !== updatedAt && <p>updated at {updatedAt}</p>}
								</DateContainer>
								<IconContainer>
									<FiEdit size={'1.5rem'} onClick={() => handleEdit(note._id)} />
									<FiTrash2 size={'1.5rem'} onClick={() => handleDeleteClick(note._id)} />
								</IconContainer>
							</NoteContainer>
						);
					})}
				</NotesGrid>
			</SectionContainer>
			{isModalOpen && (
				<Modal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
					onConfirm={confirmDelete}
					message="Are you sure you want to delete this note?"
				/>
			)}
		</CustomContainer>
	);
};

export default AllNotes;
