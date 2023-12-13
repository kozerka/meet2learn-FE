import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteNote, getAllNotes } from '../store/thunks';

export const useNoteActions = (currentPage, tag) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleEdit = noteId => {
		navigate(`/dashboard/my-notes/${noteId}/edit`);
	};

	const handleDelete = async noteId => {
		await dispatch(deleteNote(noteId)).unwrap();
		dispatch(getAllNotes({ page: currentPage, limit: 6, tag }));
	};

	const handleTagChange = selectedOption => {
		const selectedTag = selectedOption ? selectedOption.value : '';
		navigate(`/dashboard/my-notes/page/1${selectedTag ? '?tag=' + selectedTag : ''}`);
		dispatch(getAllNotes({ page: 1, limit: 6, tag: selectedTag }));
	};
	const handleChangePage = newPage => {
		navigate(`/dashboard/my-notes/page/${newPage}${tag ? '?tag=' + tag : ''}`);
		dispatch(getAllNotes({ page: newPage, limit: 6, tag }));
	};

	return { handleEdit, handleDelete, handleTagChange, handleChangePage };
};
