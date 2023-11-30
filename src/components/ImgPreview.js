import { useState } from 'react';
import PropTypes from 'prop-types';
const ImgPreview = ({ file }) => {
	const [preview, setPreview] = useState({});
	if (file) {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			setPreview(reader.result);
		};
	}

	return (
		<div>
			<img style={{ width: '240px' }} src={preview} alt={'preview'} />
		</div>
	);
};

ImgPreview.propTypes = {
	file: PropTypes.any,
};

export default ImgPreview;
