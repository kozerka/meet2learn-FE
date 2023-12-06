import { PostItem } from '../../../components/features';
import { getPosts } from '../../../store/slices/postSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactSelect from 'react-select';
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

	// Filtrowanie postów
	const filteredPosts = selectedCategory
		? posts.filter(post => post.category === selectedCategory.value)
		: posts;
	if (isLoading) {
		return <div>Loading...</div>;
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
