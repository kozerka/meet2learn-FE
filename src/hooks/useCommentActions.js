import { useSelector } from 'react-redux';

export const useCommentActions = comment => {
	const userAuth = useSelector(state => state.user.userAuth);
	const loggedInUserId = userAuth?.userInfo?._id;
	const isCommentAuthor = comment.user?._id === loggedInUserId;

	return { userAuth, loggedInUserId, isCommentAuthor };
};
