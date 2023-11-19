import styled, { css } from 'styled-components';

const TimelineSection = styled.section`
	padding: 3rem 1rem;
`;

const TimelineItems = styled.div`
	max-width: 62rem;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		width: 0.1rem;
		height: 100%;
		background-color: ${({ theme }) => theme.secondary};
		left: calc(50% - 0.05rem);
		border-radius: 1rem;

		@media (max-width: 767px) {
			left: 0.5rem;
		}
	}
`;

const TimelineItem = styled.div`
	margin-bottom: 2.5rem;
	width: 100%;
	position: relative;

	&:last-child {
		margin-bottom: 0;
	}

	&:nth-child(odd) {
		padding-right: calc(50% + 2rem);
		text-align: right;
	}

	&:nth-child(even) {
		padding-left: calc(50% + 2rem);
	}
`;

const TimelineDot = styled.div`
	height: 1.5rem;
	width: 1.5rem;
	background-color: ${({ theme }) => theme.secondary};
	position: absolute;
	left: calc(50% - 0.75rem);
	border-radius: 50%;
	top: 1rem;
`;

const TimelineNumber = styled.div`
	font-size: 2rem;
	color: ${({ theme }) => theme.primary};
	margin: 0.5rem 0 1rem;
`;

const TimelineContent = styled.div`
	background-color: ${({ theme }) => theme.background};
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.06);
	padding: 2rem;
	border-radius: 0.5rem;
	text-align: center;

	p {
		line-height: 1.5rem;
	}
`;

const fadeIn = css`
	opacity: 1;
`;

const ResponsiveTimelineItem = styled(TimelineItem)`
	opacity: 0;
	transition: opacity 0.5s ease-out ${props => props.delay}s;

	${props => props.isVisible && fadeIn}

	@media (max-width: 767px) {
		&:nth-child(odd),
		&:nth-child(even) {
			padding-left: 2rem;
			text-align: left;
		}

		&:nth-child(odd) {
			padding-right: 0;
		}
	}

	& ${TimelineDot} {
		@media (max-width: 767px) {
			left: -0.2rem;
		}
	}
`;

export {
	TimelineSection,
	TimelineItems,
	TimelineItem,
	TimelineDot,
	TimelineNumber,
	TimelineContent,
	ResponsiveTimelineItem,
	fadeIn,
};
