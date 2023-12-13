import {
	Avatar,
	UserWrapper,
	CommentWrapper,
	UserName,
	CommentText,
	CommentDate,
	DeleteButton,
	CommentBubble,
} from './CommentItem.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import { deleteComment, getPosts, getPostsByUserId } from '../../../store/thunks';
import { toast } from 'react-toastify';
import { formatDateSimple } from '../../../utils';
import { useCommentActions } from '../../../hooks';

const CommentItem = ({ comment, postId }) => {
	const dispatch = useDispatch();
	const { text, date, user } = comment;
	const { loggedInUserId, isCommentAuthor } = useCommentActions(comment);

	const handleDelete = async () => {
		try {
			await dispatch(deleteComment({ postId, commentId: comment._id })).unwrap();
			toast.success('Comment deleted successfully');
			dispatch(getPosts());
			dispatch(getPostsByUserId(loggedInUserId));
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<CommentWrapper>
			<UserWrapper>
				<Avatar src={user.avatar} alt={'avatar of user'} />
				<UserName>{user.name}</UserName>
			</UserWrapper>
			<CommentBubble>
				<CommentText>{text}</CommentText>
				<CommentDate>Posted on {formatDateSimple(date)}</CommentDate>
				{isCommentAuthor && (
					<DeleteButton onClick={handleDelete}>
						<FaTrashAlt />
					</DeleteButton>
				)}
			</CommentBubble>
		</CommentWrapper>
	);
};

CommentItem.propTypes = {
	postId: PropTypes.string.isRequired,
	comment: PropTypes.object.isRequired,
	isCommentAuthor: PropTypes.bool,
	deleteComment: PropTypes.func,
};

export default CommentItem;
