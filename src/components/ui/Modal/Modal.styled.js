import styled from 'styled-components';

export const ModalBackdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 1050;
`;

export const ModalWrapper = styled.div`
	position: fixed;
	color: ${({ theme }) => theme.text};
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${({ theme }) => theme.background};
	padding: 8rem;
	z-index: 1050;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
`;

export const ModalHeader = styled.div`
	display: flex;
	text-align: center;
	justify-content: space-between;
	margin-bottom: 20px;
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	margin: 1rem;
	font-size: 2rem;
	cursor: pointer;
	border: none;
	background: none;
`;

export const ModalBody = styled.div`
	text-align: center;
	font-size: 1.2rem;
	margin-bottom: 3rem;
`;

export const ModalFooter = styled.div`
	display: flex;
	justify-content: flex-end;
`;
