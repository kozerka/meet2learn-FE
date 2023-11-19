import { useInView } from 'react-intersection-observer';
import {
	TimelineSection,
	TimelineItems,
	TimelineDot,
	TimelineNumber,
	TimelineContent,
	ResponsiveTimelineItem,
	StyledLink,
} from './Timeline.styled';
import { timelineData } from '../../../data/timelineData';
import Proptypes from 'prop-types';
import IntersectionTitle from '../../layout/IntersectionTitle';
import Button from '../../ui/Button';

const TimelineItemComponent = ({ title, link, linkText, index }) => {
	const [ref, inView] = useInView({ threshold: 0.1 });

	return (
		<ResponsiveTimelineItem ref={ref} isVisible={inView} delay={index * 0.5}>
			<TimelineDot />
			<TimelineNumber>{index + 1}</TimelineNumber>
			<TimelineContent>
				<p>{title}</p>
				{link && (
					<Button $primary={true}>
						<StyledLink to={link}>{linkText}</StyledLink>
					</Button>
				)}
			</TimelineContent>
		</ResponsiveTimelineItem>
	);
};

const Timeline = () => {
	return (
		<div id={'timeline'}>
			<IntersectionTitle title={'How it works'} text={"It's easy"} />
			<TimelineSection>
				<TimelineItems>
					{timelineData.map((item, index) => (
						<TimelineItemComponent
							key={index}
							title={item.title}
							link={item.link}
							linkText={item.linkText}
							index={index}
						/>
					))}
				</TimelineItems>
			</TimelineSection>
		</div>
	);
};

TimelineItemComponent.propTypes = {
	title: Proptypes.string,
	link: Proptypes.string,
	linkText: Proptypes.string,
	index: Proptypes.number,
};

export default Timeline;
