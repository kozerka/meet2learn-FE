import DOMPurify from 'dompurify';

export const createMarkup = htmlContent => {
	return { __html: DOMPurify.sanitize(htmlContent) };
};
