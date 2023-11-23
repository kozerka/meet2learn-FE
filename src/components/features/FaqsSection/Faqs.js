import { useState } from 'react';
import { faqsData } from '../../../data';
import question from '../../../assets/img/question.png';
import {
	AccordionSection,
	Item,
	Number,
	Text,
	HiddenBox,
	Paragraph,
	Icon,
	Image,
	Container,
	ImageContainer,
} from './Faqs.styled';
import IntersectionTitle from '../../layout/IntersectionTitle';

const Accordion = () => {
	const [openItemIndex, setOpenItemIndex] = useState(null);

	const handleToggle = index => {
		setOpenItemIndex(openItemIndex === index ? null : index);
	};

	return (
		<div>
			<IntersectionTitle title={'FAQ'} text={'Ask, we will help'} />
			<Container>
				<ImageContainer>
					<Image src={question} alt={'faqs'} />
				</ImageContainer>
				<AccordionSection>
					{faqsData.map((item, index) => (
						<Item
							key={index}
							className={openItemIndex === index ? 'open' : ''}
							onClick={() => handleToggle(index)}
						>
							<Number>{item.number}</Number>
							<Text>{item.question}</Text>
							<Icon $isOpen={openItemIndex === index} />
							<HiddenBox className={'hiddenBox'}>
								<Paragraph>{item.answer}</Paragraph>
							</HiddenBox>
						</Item>
					))}
				</AccordionSection>
			</Container>
		</div>
	);
};

export default Accordion;
