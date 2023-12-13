import PropTypes from 'prop-types';
import { ButtonContainer, Button, Modal } from '../../ui';
import { useModal } from '../../../hooks';

const DeleteAccount = ({ onConfirm }) => {
	const { isOpen, openModal, closeModal } = useModal();

	return (
		<>
			<ButtonContainer>
				<Button $primary onClick={openModal}>
					Delete My Account
				</Button>
			</ButtonContainer>
			<Modal
				isOpen={isOpen}
				onClose={closeModal}
				onConfirm={() => {
					onConfirm();
					closeModal();
				}}
				message={'Are you sure you want to permanently delete your account?'}
			/>
		</>
	);
};

DeleteAccount.propTypes = {
	onConfirm: PropTypes.func.isRequired,
};

export default DeleteAccount;
