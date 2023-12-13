import { useState } from 'react';

export const useMobileNav = () => {
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

	const toggleMobileNav = () => setIsMobileNavOpen(prevState => !prevState);
	const closeMobileNav = () => setIsMobileNavOpen(false);

	return { isMobileNavOpen, toggleMobileNav, closeMobileNav };
};
