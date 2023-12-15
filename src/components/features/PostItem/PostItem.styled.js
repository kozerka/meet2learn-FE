import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostCard = styled.div`
	position: relative;
	overflow: hidden;
	background-color: ${({ theme }) => theme.background};
	padding: 2rem;
	margin-bottom: 1rem;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 1200px;
	margin: 1rem auto;
`;
export const StyledLink = styled(Link)`
	text-decoration: none;
	color: white;
`;

export const PostTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;

	margin-bottom: 1rem;
	color: ${props => props.theme.text};
	gap: 1rem;
	div {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 0.5rem;
	}
`;

export const PostAvatar = styled.img`
	border-radius: 50%;
	width: 50px;
	height: 50px;

	align-self: center;
	object-fit: cover;
`;
export const UserName = styled.h5`
	margin: 0;
	color: ${({ theme }) => theme.text};
	line-height: 0.5rem;
`;
export const PostName = styled.h3`
	color: ${({ theme }) => theme.primary};
	text-transform: uppercase;
	span {
		color: ${({ theme }) => theme.text};
		font-size: 0.7rem;
		margin: 0 0.5rem;
		font-weight: 400;
		text-transform: capitalize;
	}
`;

export const PostContent = styled.div`
	margin-bottom: 1rem;
	padding-bottom: 1rem;
	padding: 1rem;
	background-color: #f9f7f9;
	color: #181921;
	border-radius: 6px;
`;

export const PostCategory = styled.span`
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.textInverted};
	position: absolute;
	top: 1rem;
	right: 1rem;
	font-size: 0.8rem;
	padding: 0.3rem 0.6rem;
	border-radius: 6px;
	text-transform: uppercase;
`;

export const PostDate = styled.p`
	color: #666;
	font-size: 0.8rem;
`;

export const Description = styled.span`
	margin-right: 0.7rem;
`;

export const PostActions = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
`;

export const ActionButton = styled.button`
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;
	margin-right: 0.5rem;
	margin-bottom: 1rem;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&.priority {
		background-color: #ffc107;
		color: #363537;
	}

	&.edit,
	&.comment {
		background-color: #5792f0;
		color: white;
	}
	&.delete,
	&.dislike {
		background-color: #ea6976;
		color: white;
	}

	&.like {
		background-color: #5cd879;
		color: white;
	}

	svg {
		margin-right: 0.3rem;
	}
`;
export const PostDateContainer = styled.div`
	position: absolute;
	bottom: 1rem;
	text-align: right;
	right: 1rem;
	color: ${({ theme }) => theme.text};
`;
