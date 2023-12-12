import { PostItem } from '../../../components/features';
import { getPosts } from '../../../store/slices/postSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactSelect from 'react-select';
import Loader from '../../../components/ui/Loader/Loader';
const AllPosts = () => {
	const dispatch = useDispatch();
	const [selectedCategory, setSelectedCategory] = useState(null);
	const { posts, isLoading } = useSelector(state => state.posts);
	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);
	const categories = [...new Set(posts.map(post => post.category))].map(category => ({
		value: category,
		label: category,
	}));

	const filteredPosts = selectedCategory
		? posts.filter(post => post.category === selectedCategory.value)
		: posts;
	if (isLoading) {
		return <Loader />;
	}
	const handleCategoryChange = selectedOption => {
		setSelectedCategory(selectedOption);
	};
	return (
		<div style={{ width: '100%' }}>
			<div style={{ width: '100%', maxWidth: '1200px', margin: '1rem  auto' }}>
				<ReactSelect
					options={categories}
					onChange={handleCategoryChange}
					value={selectedCategory}
					placeholder={'Select a category'}
					isClearable
				/>
			</div>
			{filteredPosts.map(post => (
				<PostItem key={post._id} post={post} />
			))}
		</div>
	);
};

export default AllPosts;
