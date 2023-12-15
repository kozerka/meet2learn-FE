import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const ThemedToastContainer = styled(ToastContainer)`
	.Toastify__toast {
		background-color: ${props => props.theme.background};

		color: ${props => props.theme.text};
	}
	.Toastify__close-button {
		color: ${props => props.theme.text};
	}

	.Toastify__close-button:hover {
		color: ${props => props.theme.primary};
	}
`;
