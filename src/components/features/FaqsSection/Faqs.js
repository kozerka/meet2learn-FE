import { useState, useCallback } from 'react';
import { faqsData } from '../../../data';
import question from '../../../assets/img/question.png';
import { AccordionSection, Image, Container, ImageContainer } from './Faqs.styled';
import { IntersectionTitle } from '../../ui/';
import FaqItem from './FaqItem';

const Accordion = () => {
	const [openItemIndex, setOpenItemIndex] = useState(null);

	const handleToggle = useCallback(
		index => {
			setOpenItemIndex(openItemIndex === index ? null : index);
		},
		[openItemIndex]
	);

	return (
		<div>
			<IntersectionTitle title={'FAQ'} text={'Ask, we will help'} />
			<Container>
				<ImageContainer>
					<Image src={question} alt={'faqs'} />
				</ImageContainer>
				<AccordionSection>
					{faqsData.map((item, index) => (
						<FaqItem
							key={item.number}
							item={item}
							isOpen={openItemIndex === index}
							onClick={() => handleToggle(index)}
						/>
					))}
				</AccordionSection>
			</Container>
		</div>
	);
};

export default Accordion;
