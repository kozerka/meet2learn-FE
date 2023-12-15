import { FiMail, FiLock, FiUser } from 'react-icons/fi';
export const registerFormFields = [
	{ label: 'Name', type: 'text', name: 'name', icon: <FiUser /> },
	{ label: 'Email', type: 'email', name: 'email', icon: <FiMail /> },
	{ label: 'Password', type: 'password', name: 'password', icon: <FiLock /> },
	{ label: 'Confirm Password', type: 'password', name: 'confirmPassword', icon: <FiLock /> },
];
