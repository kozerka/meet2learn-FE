import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostItem from '../../../components/ui/PostItem';
import { getPostsByUserId } from '../../../store/slices/postSlice';

const MyPosts = () => {
	const dispatch = useDispatch();
	const userAuth = useSelector(state => state.user.userAuth);
	const userId = userAuth?.userInfo?._id;
	const { userPosts, isLoading } = useSelector(state => state.posts);

	useEffect(() => {
		if (userId) {
			dispatch(getPostsByUserId(userId));
		}
	}, [dispatch, userId]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (userPosts.length === 0) {
		return <div>You have no posts yet.</div>;
	}

	return (
		<div style={{ width: '100%' }}>
			{userPosts.map(post => (
				<PostItem key={post._id} post={post} />
			))}
		</div>
	);
};

export default MyPosts;
