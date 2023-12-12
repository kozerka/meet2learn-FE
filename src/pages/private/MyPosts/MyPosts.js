import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostItem } from '../../../components/features';
import { getPostsByUserId } from '../../../store/slices/postSlice';
import Loader from '../../../components/ui/Loader/Loader';

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
		return <Loader />;
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
