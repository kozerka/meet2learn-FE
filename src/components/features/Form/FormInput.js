import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 280px;

	label {
		font-size: 12px;
		text-transform: uppercase;
		color: ${({ theme }) => theme.primary};
	}

	.inputField,
	.textareaField {
		padding: 15px;
		margin: 10px 0px;
		border-radius: 5px;
		border: none;
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
	}
`;

const FormInput = ({ label, errorMessage, onChange, type, ...inputProps }) => {
	return (
		<Container>
			<label>{label}</label>
			{type === 'textarea' ? (
				<textarea {...inputProps} onChange={onChange} className={'textareaField'} />
			) : (
				<input {...inputProps} type={type} onChange={onChange} className={'inputField'} />
			)}
		</Container>
	);
};

FormInput.propTypes = {
	label: PropTypes.string.isRequired,
	errorMessage: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
	inputProps: PropTypes.object,
};

export default FormInput;
