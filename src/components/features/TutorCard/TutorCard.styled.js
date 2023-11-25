import styled from 'styled-components';

const ImageContainer = styled.div`
	height: 15rem;
	overflow: hidden;
	border-top-right-radius: 0.25rem;
	border-top-left-radius: 0.25rem;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		transition: transform 0.3s ease;

		&:hover {
			transform: scale(1.05);
		}
	}
`;

const TutorCardWrapper = styled.article`
	background: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.text};
	border-radius: 0.25rem;
	width: 300px;
	box-shadow:
		0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
	margin: 2rem auto;
	position: relative;
`;

const ItemInfo = styled.div`
	padding: 1.5rem;
`;

const TopSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 8px;
`;

const Name = styled.h4`
	font-size: 1.2rem;
	font-weight: 500;
`;

const Rating = styled.div`
	display: flex;
	align-items: center;
	font-size: 1rem;
	color: #fbb72c;

	.star-icon {
		margin-left: 5px;
	}
`;

const Categories = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 5px;
	margin-bottom: 8px;
`;

const CategoryLabel = styled.span`
	background-color: ${({ theme }) => theme.secondary};
	color: #fff;
	padding: 0.25rem 0.5rem;
	border-radius: 0.25rem;
	font-size: 0.7rem;
	text-transform: uppercase;
`;

const Divider = styled.div`
	width: 100%;
	height: 1px;
	background-color: #e2e8f0;
	margin: 1rem 0;
`;

const Reviews = styled.p`
	font-size: 0.9rem;
	margin-bottom: 2rem;
`;

const ViewProfileButton = styled.button`
	background: ${({ theme }) => theme.primaryButton};
	color: #fff;
	white-space: nowrap;
	text-transform: uppercase;
	padding: 0.8rem 3rem;
	border: none;
	font-weight: 700;
	border-radius: 0.25rem;
	cursor: pointer;
	position: absolute;
	bottom: -18px;
	left: 50%;
	transform: translateX(-50%);
	transition: background-color 0.3s ease;

	&:hover {
		background: ${({ theme }) => theme.primaryButtonHover};
	}
`;
export {
	ImageContainer,
	TutorCardWrapper,
	ItemInfo,
	TopSection,
	Name,
	Rating,
	Categories,
	CategoryLabel,
	Divider,
	Reviews,
	ViewProfileButton,
};
