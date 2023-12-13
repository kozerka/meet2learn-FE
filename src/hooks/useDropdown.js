import { useState } from 'react';

export const useDropdown = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => setIsDropdownOpen(prevState => !prevState);
	const closeDropdown = () => setIsDropdownOpen(false);

	return { isDropdownOpen, toggleDropdown, closeDropdown };
};
