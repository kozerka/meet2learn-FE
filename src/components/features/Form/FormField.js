import PropTypes from 'prop-types';
import { useState } from 'react';
import { StyledLabel, StyledInput } from './FormField.styled';
import { ErrorText } from '../../ui/ErrorText.styled';
import { StyledIcon, StyledIconForPasswordVisibility } from '../../ui/Icon.styled';
import { FiEyeOff, FiEye } from 'react-icons/fi';
const FormField = ({
	label,
	type,
	name,
	errors,
	values,
	touched,
	handleChange,
	handleBlur,
	icon,
	...props
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const hasError = touched[name] && errors[name];
	const isPasswordField = type === 'password';
	const inputType = isPasswordField && showPassword ? 'text' : type;

	return (
		<div style={{ position: 'relative' }}>
			<StyledLabel htmlFor={name}>{label}</StyledLabel>
			<StyledInput
				id={name}
				type={inputType}
				name={name}
				onChange={handleChange}
				onBlur={handleBlur}
				value={values[name]}
				$hasError={hasError}
			/>
			{props.type === 'password' && <StyledInput />}
			<StyledIcon>{icon}</StyledIcon>
			{isPasswordField && (
				<StyledIconForPasswordVisibility onClick={() => setShowPassword(!showPassword)}>
					{showPassword ? <FiEyeOff /> : <FiEye />}
				</StyledIconForPasswordVisibility>
			)}
			{hasError && <ErrorText>{errors[name]}</ErrorText>}
		</div>
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
	icon: PropTypes.node,
};

FormField.defaultProps = {
	errors: {},
	touched: {},
};

export default FormField;
