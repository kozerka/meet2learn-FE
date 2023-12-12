import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
	likePost,
	dislikePost,
	givePriority,
	getPosts,
	getPostsByUserId,
} from '../store/slices/postSlice';

export const usePostInteractions = (postId, userId) => {
	const dispatch = useDispatch();
	const refreshPosts = () => {
		if (userId) {
			dispatch(getPostsByUserId(userId));
		}
	};

	const handleLike = async () => {
		try {
			const response = await dispatch(likePost(postId)).unwrap();
			refreshPosts();
			toast.success(response.message || 'You liked the post.');
			dispatch(getPosts());
		} catch (error) {
			toast.error(error.message || 'Failed to like the post.');
		}
	};

	const handleDislike = async () => {
		try {
			const response = await dispatch(dislikePost(postId)).unwrap();
			refreshPosts();
			toast.success(response.message || 'You disliked the post.');
			dispatch(getPosts());
		} catch (error) {
			toast.error(error.message || 'Failed to dislike the post.');
		}
	};

	const handlePriority = async () => {
		try {
			const response = await dispatch(givePriority(postId)).unwrap();
			refreshPosts();
			toast.success(response.message || 'Priority increased for the post.');
			dispatch(getPosts());
		} catch (error) {
			toast.error(error.message || 'Failed to increase priority for the post.');
		}
	};

	return { handleLike, handleDislike, handlePriority };
};
