import { RotatingLines } from 'react-loader-spinner';
import { LoaderContainer } from '../Containers';
const Loader = () => {
	return (
		<LoaderContainer>
			<RotatingLines
				strokeColor={'#E03268'}
				strokeWidth={'5'}
				animationDuration={'0.75'}
				width={'140'}
				visible={true}
			/>
		</LoaderContainer>
	);
};

export default Loader;
