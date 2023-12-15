import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
	ModalBackdrop,
	ModalBody,
	ModalFooter,
	ModalHeader,
	CloseButton,
	ModalWrapper,
} from './Modal.styled';
import { Button } from '../';
import { ButtonContainer } from '../Containers';

export const Modal = ({ isOpen, onClose, onConfirm, message }) => {
	if (!isOpen) return null;
	const modalRoot = document.getElementById('modal-root');
	if (!modalRoot) return null;

	return ReactDOM.createPortal(
		<>
			<ModalBackdrop onClick={onClose} />
			<ModalWrapper>
				<ModalHeader>
					<CloseButton onClick={onClose}>&times;</CloseButton>
				</ModalHeader>
				<ModalBody>{message}</ModalBody>
				<ModalFooter>
					<ButtonContainer>
						<Button $primary onClick={onConfirm}>
							Yes
						</Button>
						<Button $secondary onClick={onClose}>
							No
						</Button>
					</ButtonContainer>
				</ModalFooter>
			</ModalWrapper>
		</>,
		modalRoot
	);
};

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	onConfirm: PropTypes.func.isRequired,
	message: PropTypes.string.isRequired,
};
