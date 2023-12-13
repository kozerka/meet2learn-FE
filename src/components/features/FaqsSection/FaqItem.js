import PropTypes from 'prop-types';
import { Item, Number, Text, HiddenBox, Paragraph, Icon } from './Faqs.styled';

const FaqItem = ({ item, isOpen, onClick }) => (
	<Item className={isOpen ? 'open' : ''} onClick={onClick}>
		<Number>{item.number}</Number>
		<Text>{item.question}</Text>
		<Icon $isOpen={isOpen} />
		<HiddenBox className={'hiddenBox'}>
			<Paragraph>{item.answer}</Paragraph>
		</HiddenBox>
	</Item>
);

FaqItem.propTypes = {
	item: PropTypes.shape({
		number: PropTypes.string.isRequired,
		question: PropTypes.string.isRequired,
		answer: PropTypes.string.isRequired,
	}).isRequired,
	isOpen: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default FaqItem;
