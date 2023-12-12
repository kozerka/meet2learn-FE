import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getNoteById, clearNote } from '../../../store/slices/noteSlice';
import { useEffect } from 'react';
import { CustomContainer } from '../../../components/ui/Containers';
import { Tag, TagsContainer, Title } from '../AllNotes/AllNotes.styled';
import Button from '../../../components/ui/Button';
import Loader from '../../../components/ui/Loader/Loader';
const ViewNote = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const note = useSelector(state => state.notes.note);

	useEffect(() => {
		dispatch(getNoteById(id));

		return () => {
			dispatch(clearNote());
		};
	}, [dispatch, id]);

	const goBack = () => {
		navigate('..');
	};

	if (!note) {
		return <Loader />;
	}

	const createdAt = new Date(note.createdAt).toLocaleDateString();
	const updatedAt = new Date(note.updatedAt).toLocaleDateString();
	const showUpdatedDate = createdAt !== updatedAt;

	return (
		<CustomContainer>
			<div
				style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					gap: '2rem',
					marginTop: '2rem',
				}}
			>
				<Title>Title: {note.title}</Title>
				<TagsContainer>
					{note.tags.map((tag, index) => (
						<Tag key={index}>{tag}</Tag>
					))}
				</TagsContainer>
				<p>{note.content}</p>
				<p>Created at: {createdAt}</p>
				{showUpdatedDate && <p>Updated at: {updatedAt}</p>}
			</div>
			<Button $primary onClick={goBack}>
				Go back to notes
			</Button>
		</CustomContainer>
	);
};

export default ViewNote;
