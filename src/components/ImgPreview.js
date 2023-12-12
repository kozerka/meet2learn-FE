import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImgContainer } from '../components/ui';
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
		<ImgContainer>
			<img src={preview} alt={'preview'} />
		</ImgContainer>
	);
};

ImgPreview.propTypes = {
	file: PropTypes.any,
};

export default ImgPreview;
