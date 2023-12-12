import { useSelector } from 'react-redux';
import { getDateInfo } from '../../../utils';
import { SectionTitle } from '../..';

import { MessageStyled } from './WelcomeMessage.styled';
import Loader from '../../ui/Loader/Loader';
const WelcomeMessage = () => {
	const user = useSelector(state => state.user.userData);
	const { formatDate, today, daysUntilEndOfYear, currentYear } = getDateInfo();

	if (!user) {
		return <Loader />;
	}

	return (
		<MessageStyled>
			<SectionTitle title={`Hello, ${user.firstName || user.name}!`} size={'big'} />
			<p>
				Today is <span>{formatDate(today)}</span>.
			</p>
			<p>
				There are
				<span>{daysUntilEndOfYear}</span>
				days left until the end of {currentYear}.
			</p>
		</MessageStyled>
	);
};

export default WelcomeMessage;
