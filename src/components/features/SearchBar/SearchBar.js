import { useState } from 'react';
import { ErrorText } from '../../ui/ErrorText.styled';
import Button from '../../ui/Button';
import PropTypes from 'prop-types';
import { SearchBarContainer, InputContainer, StyledInput } from './SearchBar.styled';

const SearchBar = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [error, setError] = useState('');

	const handleChange = e => {
		setSearchTerm(e.target.value);
		setError('');
	};

	const handleSearch = () => {
		if (!searchTerm.trim()) {
			setError('Please enter a search term.');
		} else {
			onSearch(searchTerm);
		}
	};
	const handleReset = () => {
		setSearchTerm('');
		onSearch('');
	};
	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

	return (
		<SearchBarContainer>
			<InputContainer>
				<StyledInput
					type={'text'}
					placeholder={'Search by name or category'}
					value={searchTerm}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					$hasError={!!error}
				/>
				<Button $primary onClick={handleSearch}>
					Search
				</Button>
				<Button $secondary onClick={handleReset}>
					Reset
				</Button>
			</InputContainer>
			{error && <ErrorText>{error}</ErrorText>}
		</SearchBarContainer>
	);
};

SearchBar.propTypes = {
	onSearch: PropTypes.func.isRequired,
};

export default SearchBar;