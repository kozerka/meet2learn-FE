import { FiEdit, FiTrash2 } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { cutText, formatDateSimple } from '../../../utils';
import {
	NoteContainer,
	Title,
	TagsContainer,
	Tag,
	Content,
	DateContainer,
	IconContainer,
} from './NoteItem.styled';

const NoteItem = ({ note, onEdit, onDelete }) => {
	const createdAt = formatDateSimple(note.createdAt);
	const updatedAt = formatDateSimple(note.updatedAt);
	const showReadMore = note.content.length > 90;
	const displayedText = cutText(note.content, 90);

	return (
		<NoteContainer>
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
				<FiEdit size={'1.5rem'} onClick={() => onEdit(note._id)} />
				<FiTrash2 size={'1.5rem'} onClick={() => onDelete(note._id)} />
			</IconContainer>
		</NoteContainer>
	);
};

NoteItem.propTypes = {
	note: PropTypes.shape({
		_id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		createdAt: PropTypes.string.isRequired,
		updatedAt: PropTypes.string.isRequired,
		tags: PropTypes.arrayOf(PropTypes.string),
	}).isRequired,
	onEdit: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default NoteItem;
