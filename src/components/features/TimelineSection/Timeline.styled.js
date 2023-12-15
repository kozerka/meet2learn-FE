import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const TimelineSection = styled.section`
	margin: 8rem auto;
	padding: 1rem;
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
		width: 0.25rem;
		height: 100%;
		background-color: ${({ theme }) => theme.secondary};
		left: 0.5rem;
		border-radius: 1rem;
		@media (min-width: 767px) {
			left: 0.5rem;
			left: calc(50% - 0.05rem);
		}
	}
`;

const TimelineItem = styled.div`
	margin-bottom: 1rem;
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
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.background};
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.06);
	border-radius: 0.5rem;
	text-align: center;
	padding: 2rem;
	gap: 2rem;

	p {
		line-height: 1.2rem;
		text-transform: uppercase;
		padding: 0 1rem;
	}
`;

const fadeIn = css`
	opacity: 1;
`;

const ResponsiveTimelineItem = styled(TimelineItem)`
	opacity: 0;
	transition: opacity 0.5s ease-out ${props => props.$delay}s;

	${props => props.$isVisible && fadeIn}

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
const StyledLink = styled(Link)`
	font-size: 1.125rem;
	font-weight: 600;
	text-decoration: none;
	display: inline-block;
	color: inherit;
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
	StyledLink,
};
