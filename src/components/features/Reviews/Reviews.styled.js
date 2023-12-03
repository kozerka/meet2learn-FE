import styled from 'styled-components';

const IconContainer = styled.div`
	position: absolute;
	bottom: 20px;
	right: 20px;
	display: flex;
	gap: 5px;
	svg {
		transition: all 0.3s ease;
		border-radius: 4px;
		padding: 4px;

		&:hover {
			cursor: pointer;
		}
		&:first-child:hover {
			background-color: ${({ theme }) => theme.edit};
			color: ${({ theme }) => theme.textInverted};
		}
		&:last-child:hover {
			background-color: ${({ theme }) => theme.delete};
			color: ${({ theme }) => theme.textInverted};
		}
	}
`;
const ReviewsContainer = styled.div`
	margin-top: 20px;
`;

const ReviewItem = styled.div`
	position: relative;
	padding: 15px;
	border-bottom: 1px solid #ccc;
`;

const ReviewHeader = styled.div`
	display: flex;
	align-items: center;
`;

const Avatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin-right: 10px;
`;

const ReviewContent = styled.div`
	margin-top: 10px;
	word-break: break-all;
	margin-bottom: 1.2rem;
`;

const Rating = styled.div`
	margin-left: auto;
	display: flex;
	align-items: center;
`;
export { IconContainer, ReviewsContainer, ReviewItem, ReviewHeader, Avatar, ReviewContent, Rating };
