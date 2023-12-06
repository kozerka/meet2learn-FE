import { useState, useEffect, useMemo } from 'react';
import {
	FaThumbsUp,
	FaThumbsDown,
	FaExclamation,
	FaTrash,
	FaEdit,
	FaComment,
} from 'react-icons/fa';
import Modal from '../../ui/Modal/Modal';
import CommentForm from '../CommentForm/CommentForm';
import CommentItem from '../CommentItem/CommentItem';
import {
	PostCard,
	PostContent,
	PostCategory,
	ActionButton,
	PostName,
	PostAvatar,
	PostTop,
	PostDate,
	PostActions,
	UserName,
	PostDateContainer,
	Description,
} from './PostItem.styled';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../../store/slices/postSlice';
import { toast } from 'react-toastify';
import { useModal, usePostInteractions } from '../../../hooks';
import { formatDate } from '../../../utils';
const PostItem = ({ post }) => {
	const { _id, text, title, category, createdAt, updatedAt, comments, user } = post;
	const [commentOpen, setCommentOpen] = useState(false);
	const [postComments, setComments] = useState(comments || []);
	const navigate = useNavigate();
	const userAuth = useSelector(state => state.user.userAuth);
	const loggedInUserId = userAuth?.userInfo?._id;
	const dispatch = useDispatch();
	const { isOpen, openModal, closeModal } = useModal();
	const { handleLike, handleDislike, handlePriority } = usePostInteractions(_id);

	useEffect(() => {
		setComments(comments);
	}, [comments]);
	const isAuthor = user._id === loggedInUserId;

	const handleConfirmDelete = () => {
		dispatch(deletePost(_id))
			.unwrap()
			.then(() => {
				toast.success('Post deleted successfully!');
				closeModal();
			})
			.catch(error => {
				toast.error(`Error: ${error.message}`);
			});
	};

	const totalPriority = useMemo(() => {
		return post.priority.reduce((acc, p) => acc + p.count, 0);
	}, [post.priority]);

	const date1 = new Date(createdAt);
	const date2 = new Date(updatedAt);

	const isUpdated = date1.getTime() !== date2.getTime();

	return (
		<PostCard>
			<PostTop>
				<div>
					<PostAvatar src={user.avatar} alt={'User avatar'} />
					<UserName>
						<p>{user.name}</p>
					</UserName>
				</div>
				<PostCategory>{category}</PostCategory>
				<PostName>
					<span>Post title:</span>
					{title}
				</PostName>
			</PostTop>
			<PostContent>
				<p>{text}</p>
			</PostContent>
			<PostDateContainer>
				<PostDate>Posted on {formatDate(createdAt)}</PostDate>
				{isUpdated && <PostDate>Updated on {formatDate(updatedAt)}</PostDate>}
			</PostDateContainer>

			<PostActions>
				<ActionButton className={'like'} onClick={handleLike}>
					<FaThumbsUp />
					<span>{post.likes.length}</span>
				</ActionButton>

				<ActionButton className={'dislike'} onClick={handleDislike}>
					<FaThumbsDown />
					<span>{post.dislikes.length}</span>
				</ActionButton>

				<ActionButton className={'comment'} onClick={() => setCommentOpen(!commentOpen)}>
					<Description>Discussion</Description> <FaComment />
					{postComments.length > 0 && <span>{postComments.length}</span>}
				</ActionButton>

				<ActionButton className={'priority'} onClick={handlePriority}>
					Priority <FaExclamation />
					<span>{totalPriority}</span>
				</ActionButton>

				{isAuthor && (
					<ActionButton className={'delete'} onClick={openModal}>
						<FaTrash />
						Delete Post
					</ActionButton>
				)}

				{isAuthor && (
					<ActionButton
						className={'edit'}
						onClick={() => navigate(`/dashboard/forum/edit-post/${_id}`, { state: { post } })}
					>
						<FaEdit />
						Edit Post
					</ActionButton>
				)}
			</PostActions>
			<Modal
				isOpen={isOpen}
				onClose={closeModal}
				onConfirm={handleConfirmDelete}
				message={'Are you sure you want to delete this post?'}
			/>

			{commentOpen && (
				<>
					<CommentForm postId={_id} />
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '1rem',
						}}
					>
						{postComments?.length > 0 &&
							postComments.map(comment => (
								<CommentItem key={comment._id} postId={_id} comment={comment} />
							))}
					</div>
				</>
			)}
		</PostCard>
	);
};

PostItem.propTypes = {
	post: PropTypes.object.isRequired,
};

export default PostItem;
