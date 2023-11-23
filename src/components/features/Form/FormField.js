import PropTypes from 'prop-types';
import { StyledLabel, StyledInput } from './FormField.styled';
import { ErrorText } from '../../ui/ErrorText.styled';

const FormField = ({ label, type, name, errors, values, touched, handleChange, handleBlur }) => {
	const hasError = touched[name] && errors[name];

	return (
		<>
			<StyledLabel htmlFor={name}>{label}</StyledLabel>
			<StyledInput
				id={name}
				type={type}
				name={name}
				onChange={handleChange}
				onBlur={handleBlur}
				value={values[name]}
				$hasError={hasError}
			/>
			{hasError && <ErrorText>{errors[name]}</ErrorText>}
		</>
	);
};

FormField.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	errors: PropTypes.objectOf(PropTypes.string),
	values: PropTypes.objectOf(PropTypes.string).isRequired,
	touched: PropTypes.objectOf(PropTypes.bool),
	handleChange: PropTypes.func.isRequired,
	handleBlur: PropTypes.func.isRequired,
};

FormField.defaultProps = {
	errors: {},
	touched: {},
};

export default FormField;
