export const calculateDaysOfConnection = connectionDate => {
	const today = new Date();
	const startDate = new Date(connectionDate);
	const timeDiff = today - startDate;
	return Math.ceil(timeDiff / (1000 * 3600 * 24));
};
