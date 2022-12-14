import styled from 'styled-components';

export const PeriodicTableStyled = styled.div`
	width: 100%;
	min-height: 100vh;
	padding: 0 30px 30px 30px;
	overflow-x: auto;

	.input-control {
		display: flex;
		align-items: baseline;
		width: 60%;
		justify-content: space-between;
	}
	.type-element {
		margin-bottom: 20px;
		border: none;
		outline: none;
		border-bottom: 1px solid green;
		font-size: 20px;
	}
	.btn-random {
		background-color: #50d050;
		display: flex;
		color: #fff;
		padding: 10px;
		min-width: 70px;
		border-radius: 10px;
		border: none;
		:hover {
			cursor: pointer;
		}
	}
`;

export const HeaderStyled = styled.div`
	width: 100%;
	min-height: 50px;
	display: flex;
	justify-content: center;
	padding: 20px 0 20px 0;
	> div {
		width: 90%;
		display: flex;
		> h1 {
			display: flex;
			margin: 0;
		}
	}
`;

export const RowTableStyled = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 100%;
`;
