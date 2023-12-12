import PropTypes from 'prop-types';
import { CheckboxContainer } from './CheckboxField.styled';
import { ErrorText } from '../';

export const CheckboxField = ({ name, label, errors, touched, handleChange }) => {
	const hasError = touched[name] && Boolean(errors[name]);
	return (
		<>
			<CheckboxContainer $hasError={hasError}>
				<input type={'checkbox'} name={name} onChange={handleChange} />
				<label htmlFor={name}>{label}</label>
			</CheckboxContainer>
			{hasError && <ErrorText>{errors[name]}</ErrorText>}
		</>
	);
};

CheckboxField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	errors: PropTypes.objectOf(PropTypes.string),
	touched: PropTypes.objectOf(PropTypes.bool),
	handleChange: PropTypes.func.isRequired,
	values: PropTypes.shape({
		agreeTerms: PropTypes.bool,
	}),
};

CheckboxField.defaultProps = {
	errors: {},
	touched: {},
	values: { agreeTerms: false },
};
