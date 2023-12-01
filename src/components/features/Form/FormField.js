import PropTypes from 'prop-types';
import { useState } from 'react';
import { StyledLabel, StyledInput, StyledTextArea } from './FormField.styled';
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
	rows,
	icon,
	...props
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const hasError = touched[name] && errors[name];
	const isPasswordField = type === 'password';
	const inputType = isPasswordField && showPassword ? 'text' : type;

	return (
		<div style={{ position: 'relative', width: '100%' }}>
			<StyledLabel htmlFor={name}>{label}</StyledLabel>
			{type === 'textarea' ? (
				<StyledTextArea
					id={name}
					name={name}
					onChange={handleChange}
					onBlur={handleBlur}
					value={values[name]}
					$hasError={hasError}
					rows={rows}
				/>
			) : (
				<StyledInput
					id={name}
					type={inputType}
					name={name}
					onChange={handleChange}
					onBlur={handleBlur}
					value={values[name]}
					$hasError={hasError}
				/>
			)}
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
	values: PropTypes.objectOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.array])
	).isRequired,
	touched: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.array])),
	handleChange: PropTypes.func.isRequired,
	handleBlur: PropTypes.func.isRequired,
	rows: PropTypes.number,
	icon: PropTypes.node,
};

FormField.defaultProps = {
	errors: {},
	touched: {},
};

export default FormField;
