export function formatDate(dateString) {
	const options = {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	};
	return new Intl.DateTimeFormat('default', options).format(new Date(dateString));
}

export function formatDateSimple(dateString) {
	return new Intl.DateTimeFormat().format(new Date(dateString));
}
