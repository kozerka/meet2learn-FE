import styled from 'styled-components';
import Button from '../../../components/ui/Button';
import { DashboardContainer, ButtonContainer } from '../../../components/ui/Containers';
import Modal from '../../../components/ui/Modal/Modal';
import { useState } from 'react';

const Container = styled.div`
	max-width: 1200px;
	width: 100%;
	margin: 2rem auto;
	padding: 1rem 2rem;
	border-radius: 1rem;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	background-color: ${({ theme }) => theme.background};
`;
const Heading = styled.h3`
	align-self: center;
	margin: 1rem 0;
	border-bottom: 4px solid ${({ theme }) => theme.primary};
`;
const Settings = () => {
	const [modalOpen, setModalOpen] = useState(false);

	const handleDeleteAccount = () => {
		console.log('zamiast połączenia a api, tu też muszę pamieta o dodaniu logout user'); // TODO
		setModalOpen(false);
	};
	return (
		<DashboardContainer>
			<Container>
				<Heading>Change Password</Heading>
				<p>
					To change the password please enter your current password, and then enter your new
					password twice for confirmation.
				</p>
			</Container>
			<Container>
				<Heading>Delete Account</Heading>
				<p>
					Deleting your account is irreversible. It will remove all your posts, notes, and contacts
					with other users.
				</p>
				<ButtonContainer>
					<Button $primary onClick={() => setModalOpen(true)}>
						Delete My Account
					</Button>
				</ButtonContainer>
				<Modal
					isOpen={modalOpen}
					onClose={() => setModalOpen(false)}
					onConfirm={handleDeleteAccount}
					message={'Are you sure you want to permanently delete your account?'}
				/>
			</Container>
		</DashboardContainer>
	);
};

export default Settings;
