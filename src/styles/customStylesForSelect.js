export const customStyles = {
	control: (provided, state) => ({
		...provided,
		borderColor: state.isFocused ? '#E03268' : provided.borderColor,
		'&:hover': {
			borderColor: state.isFocused ? '#E03268' : provided.borderColor,
		},
		boxShadow: state.isFocused ? `0 0 0 1px #E03268` : 'none',
	}),
	option: (provided, state) => ({
		...provided,
		backgroundColor: state.isSelected
			? '#E03268'
			: state.isFocused
			  ? 'rgba(224, 50, 104, 0.2)'
			  : provided.backgroundColor,
		color: state.isSelected ? 'white' : 'black',
		'&:active': {
			backgroundColor: state.isSelected ? '#E03268' : 'rgba(224, 50, 104, 0.5)',
			color: 'white',
		},
	}),
	color: (provided, state) => ({
		...provided,
		color: 'black',
	}),
};
