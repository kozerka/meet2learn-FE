export const getDateInfo = () => {
	const today = new Date();
	const currentYear = today.getFullYear();
	const endOfYear = new Date(currentYear, 11, 31);
	const daysUntilEndOfYear = Math.ceil((endOfYear - today) / (1000 * 60 * 60 * 24));

	const formatDate = date => {
		return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
	};

	return { formatDate, today, daysUntilEndOfYear, currentYear };
};
