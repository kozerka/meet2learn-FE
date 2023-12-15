import { PostItem } from '../../../components/features';
import { Loader } from '../../../components/ui';
import ReactSelect from 'react-select';
import { useAllPosts } from '../../../hooks';
import { Container } from './AllPosts.styled';
import { customStyles } from '../../../styles/customStylesForSelect';

const AllPosts = () => {
	const { isLoading, categories, filteredPosts, handleCategoryChange, selectedCategory, userId } =
		useAllPosts();

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div style={{ width: '100%' }}>
			<Container>
				<ReactSelect
					options={categories}
					onChange={handleCategoryChange}
					value={selectedCategory}
					placeholder={'Select a category'}
					styles={customStyles}
					isClearable
				/>
			</Container>
			{filteredPosts.map(post => (
				<PostItem key={post._id} post={post} userId={userId} />
			))}
		</div>
	);
};

export default AllPosts;
