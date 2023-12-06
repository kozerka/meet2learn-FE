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
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import { deleteComment } from '../../store/slices/commentSlice';
import { getPosts } from '../../store/slices/postSlice';
import { toast } from 'react-toastify';

const CommentItem = ({ comment, postId }) => {
	const dispatch = useDispatch();
	const { text, date, user } = comment;
	const userAuth = useSelector(state => state.user.userAuth);
	const loggedInUserId = userAuth?.userInfo?._id;
	const isCommentAuthor = comment.user?._id === loggedInUserId;

	const handleDelete = async () => {
		try {
			await dispatch(deleteComment({ postId, commentId: comment._id })).unwrap();
			toast.success('Comment deleted successfully');
			dispatch(getPosts());
		} catch (error) {
			console.error(error);
		}
	};
	function formatDate(dateString) {
		return new Intl.DateTimeFormat().format(new Date(dateString));
	}

	return (
		<CommentWrapper>
			<UserWrapper>
				<Avatar src={user.avatar} alt={'avatar of user'} />
				<UserName>{user.name}</UserName>
			</UserWrapper>
			<CommentBubble>
				<CommentText>{text}</CommentText>
				<CommentDate>Posted on {formatDate(date)}</CommentDate>
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
