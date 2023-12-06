import { useLocation } from 'react-router-dom';
import AddPost from '../AddPost/AddPost';

const EditPost = () => {
	const location = useLocation();
	const { post } = location.state || {};

	return <AddPost initialPost={post} isEditing={true} />;
};

export default EditPost;
