import {
	CustomContainer,
	SectionContainer,
	Modal,
	Button,
	Loader,
	SectionTitle,
	CustomPagination,
} from '../../../components/ui';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { NotesGrid } from './AllNotes.styled';
import { NoteItem } from '../../../components/features';
import { useNoteActions, useModal } from '../../../hooks';
import { getUniqueTags, getAllNotes } from '../../../store/thunks';
import { customStyles } from '../../../styles/customStylesForSelect';

const AllNotes = () => {
	const { notes, isLoading, uniqueTags, currentPage, totalPages, error } = useSelector(
		state => state.notes
	);
	const dispatch = useDispatch();
	const { pageNumber = 1, tag } = useParams();
	const page = parseInt(pageNumber, 10);
	const { handleEdit, handleDelete, handleTagChange, handleChangePage } = useNoteActions(
		currentPage,
		tag
	);
	const { isOpen, openModal, closeModal } = useModal();
	const [noteToDelete, setNoteToDelete] = useState(null);

	useEffect(() => {
		dispatch(getUniqueTags());
		dispatch(getAllNotes({ page, limit: 6, tag }));
	}, [dispatch, page, tag]);

	const handleDeleteClick = noteId => {
		setNoteToDelete(noteId);
		openModal();
	};
	const handlePageClick = event => {
		const newPage = event.selected + 1;
		handleChangePage(newPage);
	};

	const confirmDelete = async () => {
		if (noteToDelete) {
			try {
				await handleDelete(noteToDelete);
				toast.success('Note deleted successfully');
				closeModal();
			} catch (error) {
				toast.error('Error deleting note: ' + error.message);
			}
			setNoteToDelete(null);
		}
	};

	const handleResetFilter = () => {
		handleTagChange({ value: null });
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
				<div>You have no notes yet. Create one!</div>
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
				styles={customStyles}
				isClearable
			/>
			<Button $small onClick={handleResetFilter}>
				Reset Filter
			</Button>
			<SectionContainer>
				<NotesGrid>
					{notes.map(note => (
						<NoteItem
							key={note._id}
							note={note}
							onEdit={handleEdit}
							onDelete={() => handleDeleteClick(note._id)}
						/>
					))}
				</NotesGrid>
			</SectionContainer>
			{isOpen && (
				<Modal
					isOpen={isOpen}
					onClose={closeModal}
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
