import styled, { css } from 'styled-components';

const StyledButton = styled.button`
	background-color: ${({ theme }) => theme.primaryButton};
	color: ${({ theme }) => theme.text};
	text-align: center;
	outline: none;
	padding: 0.75rem 2rem;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
	border-radius: 0.25rem;
	font-size: 1.125rem;
	font-weight: 600;
	cursor: pointer;
	border: none;
	box-shadow: ${({ theme }) => theme.buttonBoxShadow};
	transition: all 0.2s ease-in-out;

	&:hover {
		box-shadow: ${({ theme, disabled }) => !disabled && theme.buttonHoverBoxShadow};
		color: ${({ theme, disabled }) => !disabled && theme.text};
		background-color: ${({ theme, disabled }) => !disabled && theme.primaryButtonHover};
	}

	&:active {
		box-shadow: ${({ disabled }) => !disabled && 'inset 3px 3px 5px rgba(0, 0, 0, 0.2)'};
		transform: ${({ disabled }) => !disabled && 'translateY(2px)'};
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	${({ $fullWidth }) =>
		$fullWidth &&
		css`
			width: 100%;
			margin: 2rem 0;
		`}

	${({ $primary, theme }) =>
		$primary &&
		css`
			background-color: ${theme.primaryColor};
			color: ${theme.body};

			&:hover {
				background-color: ${theme.primaryHoverBackground};
				color: ${theme.body};
			}

			&:active {
				background-color: ${theme.primaryActiveBackground};
				color: ${theme.primaryActiveColor};
			}
		`}

  ${({ $secondary, theme }) =>
		$secondary &&
		css`
			background-color: transparent;
			border: 2px solid ${theme.secondaryButtonHover};
			color: ${theme.text};

			&:hover {
				background-color: ${theme.secondaryButtonHover};
				border: 2px solid ${theme.secondaryButtonHover};
				color: ${theme.secondaryHoverColor};
			}

			&:active {
				background-color: ${theme.secondaryActiveBackground};
				color: ${theme.secondaryActiveColor};
			}
		`}
`;

export { StyledButton };
