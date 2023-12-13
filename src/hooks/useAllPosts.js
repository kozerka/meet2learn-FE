import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../store/thunks';

export const useAllPosts = () => {
	const dispatch = useDispatch();
	const { posts, isLoading } = useSelector(state => state.posts);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const userAuth = useSelector(state => state.user.userAuth);
	const loggedInUserId = userAuth?.userInfo?._id;

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

	const handleCategoryChange = selectedOption => {
		setSelectedCategory(selectedOption);
	};

	return {
		isLoading,
		categories,
		filteredPosts,
		handleCategoryChange,
		selectedCategory,
		userId: loggedInUserId,
	};
};
