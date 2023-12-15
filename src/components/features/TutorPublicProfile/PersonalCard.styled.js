import styled from 'styled-components';
const CardContainer = styled.div`
	margin-top: 10rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	background: ${({ theme }) => theme.background};
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	position: relative;
	@media (min-width: 992px) {
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 1rem;

		& > :first-child {
			flex-shrink: 0;
		}
	}
`;

const ImageContainer = styled.div`
	flex: 1;
	img {
		width: 100%;
		max-width: 400px;
		height: auto;
		border-radius: 8px;
		@media (min-width: 992px) {
			max-width: 600px;
		}
	}
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 2;
	margin-left: 0;
	padding-left: 0;
	margin-left: 2rem;
	padding-left: 1rem;
	justify-content: space-between;
	@media (min-width: 992px) {
		margin-left: 2rem;
		padding-left: 1rem;
	}
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
`;

const Name = styled.h2`
	font-size: 1.5rem;
	margin: 0;
`;

const Info = styled.p`
	margin: 5px 0;
	font-size: 1rem;
`;

const RatingLabel = styled.div`
	position: absolute;
	top: 10px;
	left: 10px;
	background-color: ${({ theme }) => theme.secondary};
	padding: 5px 10px;
	border-radius: 5px;
	display: flex;
	align-items: center;
	font-size: 1rem;

	.star-icon {
		margin-right: 5px;
		color: #ffd700;
	}
`;
const SubjectLabel = styled.span`
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.textInverted};
	text-transform: uppercase;
	padding: 5px 10px;
	border-radius: 5px;
	margin: 0 3px;
	font-size: 0.9rem;
`;
export {
	CardContainer,
	ImageContainer,
	ContentContainer,
	Name,
	Info,
	RatingLabel,
	SubjectLabel,
	Details,
};
