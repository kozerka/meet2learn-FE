import ReactPaginate from 'react-paginate';
import { PaginationContainer } from './CustomPagination.styled.js.js';
import PropTypes from 'prop-types';

const CustomPagination = ({ pageCount, onPageChange, currentPage }) => {
	return (
		<PaginationContainer>
			<ReactPaginate
				previousLabel={'← Prev'}
				nextLabel={'Next →'}
				breakLabel={'...'}
				pageCount={pageCount}
				onPageChange={onPageChange}
				containerClassName={'pagination'}
				activeClassName={'active'}
				forcePage={currentPage - 1}
				renderOnZeroPageCount={null}
			/>
		</PaginationContainer>
	);
};

CustomPagination.propTypes = {
	pageCount: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired,
};

export default CustomPagination;
