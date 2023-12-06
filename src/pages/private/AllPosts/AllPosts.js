import PostItem from '../../../components/ui/PostItem';
import { getPosts } from '../../../store/slices/postSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const AllPosts = () => {
	const dispatch = useDispatch();
	const { posts, isLoading } = useSelector(state => state.posts);
	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);
	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<div style={{ width: '100%' }}>
			{posts.map(post => (
				<PostItem key={post._id} post={post} />
			))}
		</div>
	);
};

export default AllPosts;
