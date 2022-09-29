import styled from 'styled-components';

type Props = {
	backgroundColor: `#${string}`;
};

export const ElementTableStyled = styled.div<Props>`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.backgroundColor};
	justify-content: space-between;
	box-sizing: border-box;
	margin: 1px;
	min-width: 80px;
	height: 80px;
	padding-left: 5px;
	.symbol-table {
		margin: 0;
		line-height: 1;
	}
	sup {
		font-size: xx-small;
	}
	sub {
		font-size: x-small;
	}

	&.hide {
		background-color: #ccc;
	}
	&.selected {
		transform: scale(1.05);
		background-color: ${(props) => props.backgroundColor};
	}
	@media (max-width: 1280px) {
		min-width: 60px;
		height: 60px;
		.symbol-table {
			font-size: medium;
		}
	}
`;
