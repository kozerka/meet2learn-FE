import { useState } from 'react';
import { faqsData } from '../../../data/faqsData';
import { AccordionSection, Item, Number, Text, HiddenBox, Paragraph, Icon } from './Faqs.styled';

const Accordion = () => {
	const [openItemIndex, setOpenItemIndex] = useState(null);

	const handleToggle = index => {
		setOpenItemIndex(openItemIndex === index ? null : index);
	};

	return (
		<AccordionSection>
			{faqsData.map((item, index) => (
				<Item
					key={index}
					className={openItemIndex === index ? 'open' : ''}
					onClick={() => handleToggle(index)}
				>
					<Number>{item.number}</Number>
					<Text>{item.question}</Text>
					<Icon isOpen={openItemIndex === index} />
					<HiddenBox className={'hiddenBox'}>
						<Paragraph>{item.answer}</Paragraph>
					</HiddenBox>
				</Item>
			))}
		</AccordionSection>
	);
};

export default Accordion;
