import PropTypes from 'prop-types';
import fetchCategories from '../../../services/categoryServices';
import { useEffect, useState } from 'react';
import { PostForm } from '../../../components/features/Forms';

const AddPost = ({ initialPost, isEditing }) => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetchCategories().then(data => {
			const categoriesArray = Object.entries(data).map(([key, value]) => ({
				value,
				label: value,
			}));
			setCategories(categoriesArray);
		});
	}, []);

	return <PostForm initialPost={initialPost} isEditing={isEditing} categories={categories} />;
};

AddPost.propTypes = {
	initialPost: PropTypes.object,
	isEditing: PropTypes.bool,
};

export default AddPost;
