import { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, Button, Modal } from '../../ui';

const DeleteAccount = ({ onConfirm }) => {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			<ButtonContainer>
				<Button $primary onClick={() => setModalOpen(true)}>
					Delete My Account
				</Button>
			</ButtonContainer>
			<Modal
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)}
				onConfirm={() => {
					onConfirm();
					setModalOpen(false);
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
