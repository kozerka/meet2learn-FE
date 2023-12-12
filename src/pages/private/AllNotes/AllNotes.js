import { CustomContainer, SectionContainer } from '../../../components/ui/Containers';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { deleteNote, getUniqueTags, getAllNotes } from '../../../store/thunks';
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
import { SectionTitle, CustomPagination } from '../../../components';
import Button from '../../../components/ui/Button';
import Loader from '../../../components/ui/Loader/Loader';

const AllNotes = () => {
	const { notes, isLoading, uniqueTags, currentPage, totalPages, error } = useSelector(
		state => state.notes
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [noteToDelete, setNoteToDelete] = useState(null);

	useEffect(() => {
		dispatch(getUniqueTags());
	}, [dispatch]);

	const { pageNumber, tag } = useParams();
	const page = pageNumber ? parseInt(pageNumber, 10) : 1;

	useEffect(() => {
		dispatch(getAllNotes({ page, limit: 6, tag }));
	}, [dispatch, page, tag]);

	const handleEdit = noteId => {
		navigate(`/dashboard/my-notes/${noteId}/edit`);
	};
	const handleDeleteClick = noteId => {
		setNoteToDelete(noteId);
		setIsModalOpen(true);
	};
	const handlePageClick = event => {
		const newPage = event.selected + 1;
		navigate(`/dashboard/my-notes/page/${newPage}${tag ? '?tag=' + tag : ''}`);
	};

	const confirmDelete = async () => {
		if (noteToDelete) {
			try {
				await dispatch(deleteNote(noteToDelete)).unwrap();
				toast.success('Note deleted successfully');
				dispatch(getAllNotes({ page: currentPage, limit: 6 }));
			} catch (error) {
				toast.error('Error deleting note: ' + error.message);
			}
			setNoteToDelete(null);
			setIsModalOpen(false);
		}
	};

	const handleTagChange = selectedOption => {
		const selectedTag = selectedOption ? selectedOption.value : '';
		dispatch(getAllNotes({ page, limit: 6, tag: selectedTag }));

		navigate(`/dashboard/my-notes/page/1${selectedTag ? '?tag=' + selectedTag : ''}`);
	};

	const handleResetFilter = () => {
		const selectedTag = null;
		dispatch(getAllNotes({ page, limit: 6, tag: selectedTag }));
		navigate(`/dashboard/my-notes/page/1`);
	};

	if (isLoading) {
		return <Loader />;
	}
	if (error) {
		return <div>Error: {error.message}</div>;
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
			<Button $small onClick={handleResetFilter}>
				Reset Filter
			</Button>

			<SectionContainer>
				<NotesGrid>
					{notes.map(note => {
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
					message={'Are you sure you want to delete this note?'}
				/>
			)}
			{totalPages > 1 && (
				<CustomPagination
					pageCount={totalPages}
					onPageChange={handlePageClick}
					currentPage={currentPage}
				/>
			)}
		</CustomContainer>
	);
};

export default AllNotes;
