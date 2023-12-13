import { PostItem } from '../../../components/features';
import { Loader } from '../../../components/ui';
import ReactSelect from 'react-select';
import { useAllPosts } from '../../../hooks';

const AllPosts = () => {
	const { isLoading, categories, filteredPosts, handleCategoryChange, selectedCategory, userId } =
		useAllPosts();

	if (isLoading) {
		return <Loader />;
	}

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
				<PostItem key={post._id} post={post} userId={userId} />
			))}
		</div>
	);
};

export default AllPosts;
