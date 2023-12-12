import { Container, Heading, SettingsContainer, Text, IconStyled } from './Settings.styled';
import ChangePasswordForm from '../../../components/features/ChangePasswordForm/ChangePasswordForm';
import DeleteAccount from '../../../components/features/DeleteAccount/DeleteAccount';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { changePassword, deleteUser } from '../../../store/thunks';
import { useNavigate } from 'react-router-dom';
const Settings = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handlePasswordChange = async (values, { resetForm }) => {
		try {
			await dispatch(
				changePassword({
					currentPassword: values.currentPassword,
					newPassword: values.newPassword,
					confirmPassword: values.confirmPassword,
				})
			);
			toast.success('Password changed successfully');
			resetForm();
		} catch (error) {
			toast.error(error.message || 'Error changing password');
		}
	};

	const handleDeleteAccount = async () => {
		try {
			await dispatch(deleteUser());
			toast.success('Account deleted successfully');
			navigate('/');
		} catch (error) {
			toast.error(error.message || 'Error deleting account');
		}
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
