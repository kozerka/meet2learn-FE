import { Container, Heading, SettingsContainer, Text, IconStyled } from './Settings.styled';
import ChangePasswordForm from '../../../components/features/ChangePasswordForm/ChangePasswordForm';
import DeleteAccount from '../../../components/features/DeleteAccount/DeleteAccount';

const Settings = () => {
	const handlePasswordChange = values => {
		console.log('Change password', values);
		// Logika zmiany hasła
	};
	const handleDeleteAccount = () => {
		console.log('zamiast połączenia a api, tu też muszę pamieta o dodaniu logout user'); // TODO
	};
	return (
		<SettingsContainer>
			<Container>
				<Heading>Change Password</Heading>
				<Text>
					To change the password please enter your current password, and then enter your new
					password twice for confirmation.
				</Text>
				<ChangePasswordForm onSubmit={handlePasswordChange} />
			</Container>
			<Container>
				<Heading>Delete Account</Heading>
				<Text>
					Deleting your account is irreversible. It will remove all your posts, notes, and contacts
					with other users.
				</Text>
				<IconStyled />
				<DeleteAccount onConfirm={handleDeleteAccount} />
			</Container>
		</SettingsContainer>
	);
};

export default Settings;
