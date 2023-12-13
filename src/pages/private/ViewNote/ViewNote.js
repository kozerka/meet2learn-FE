import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearNote } from '../../../store/slices/noteSlice';
import { getNoteById } from '../../../store/thunks';
import { useEffect } from 'react';
import { Tag, TagsContainer, Title, Content } from './ViewNote.styled';
import { Button, Loader, CustomContainer } from '../../../components/ui';
import { formatDateSimple } from '../../../utils/formatDate';

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

	const createdAt = formatDateSimple(note.createdAt);
	const updatedAt = formatDateSimple(note.updatedAt);
	const showUpdatedDate = createdAt !== updatedAt;

	return (
		<CustomContainer>
			<Content>
				<Title>Title: {note.title}</Title>
				<TagsContainer>
					{note.tags.map((tag, index) => (
						<Tag key={index}>{tag}</Tag>
					))}
				</TagsContainer>
				<p>{note.content}</p>
				<p>Created at: {createdAt}</p>
				{showUpdatedDate && <p>Updated at: {updatedAt}</p>}
			</Content>
			<Button $primary onClick={goBack}>
				Go back to notes
			</Button>
		</CustomContainer>
	);
};

export default ViewNote;
