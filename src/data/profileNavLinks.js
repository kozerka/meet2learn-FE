import { RiUserSettingsLine, RiEditLine, RiUserSearchLine } from 'react-icons/ri';
import { RxAvatar } from 'react-icons/rx';
export const profileNavLinks = [
	{ icon: RiUserSearchLine, to: '', text: 'My Profile' },
	{ icon: RiEditLine, to: 'edit', text: 'Edit Profile' },
	{ icon: RiUserSettingsLine, to: 'settings', text: 'Settings' },
	{ icon: RxAvatar, to: 'upload-avatar', text: 'Change Your Avatar' },
];
