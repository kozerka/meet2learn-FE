import styled from 'styled-components';

export const PaginationContainer = styled.div`
	.pagination {
		display: flex;
		justify-content: space-between;
		list-style: none;
		margin-top: 20px;
		padding: 0;
	}

	.pagination a {
		cursor: default;
		padding: 0.3rem;
		border-radius: 5px;
		color: ${({ theme }) => theme.secondary};
		margin-left: 10px;
	}

	.pagination li:not(.disabled) a:hover {
		background-color: ${({ theme }) => theme.primary};
		border: 1px solid ${({ theme }) => theme.primary};
		color: ${({ theme }) => theme.textInverted};

		cursor: pointer;
	}

	.pagination li a {
		font-weight: bold;
	}

	.pagination li.active a {
		color: #f2f2f2;
		background: ${({ theme }) => theme.secondary};
	}

	.pagination li.disabled a {
		pointer-events: none;
		color: rgb(198, 197, 202);
	}
`;
