import { FiMail, FiUser, FiFileText, FiMessageSquare } from 'react-icons/fi';
export const contactFormFields = [
	{ name: 'username', type: 'text', label: 'Username', icon: <FiUser /> },
	{ name: 'email', type: 'email', label: 'Email', icon: <FiMail /> },
	{ name: 'messageTitle', type: 'text', label: 'Title', icon: <FiFileText /> },
	{ name: 'messageBody', type: 'textarea', label: 'Your Message', icon: <FiMessageSquare /> },
];
