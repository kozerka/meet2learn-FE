import { Container, Heading, SettingsContainer, Text, IconStyled } from './Settings.styled';
import { ChangePasswordForm } from '../../../components/features/Forms';
import DeleteAccount from '../../../components/features/DeleteAccount/DeleteAccount';
import { useChangePassword, useDeleteAccount } from '../../../hooks';

const Settings = () => {
	const changePasswordHandler = useChangePassword();
	const handleDeleteAccount = useDeleteAccount();

	return (
		<SettingsContainer>
			<Container>
				<Heading>Change Password</Heading>
				<Text>
					To change the password please enter your current password, and then enter your new
					password twice for confirmation.
				</Text>
				<ChangePasswordForm
					onSubmit={(values, { resetForm }) => changePasswordHandler(values, resetForm)}
				/>
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
