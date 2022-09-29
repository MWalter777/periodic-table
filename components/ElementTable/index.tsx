import React from 'react';
import { ElementTableStyled } from './index.style';

type Props = {
	backgroundColor: `#${string}`;
	atomicNumber: number;
	symbolTable: string;
	name: string;
	weight: number;
};

const ElementTable = ({
	backgroundColor,
	atomicNumber,
	name,
	symbolTable,
	weight,
}: Props) => {
	return (
		<ElementTableStyled backgroundColor={backgroundColor}>
			<sup className='atomic-number'>{atomicNumber}</sup>
			<h1 className='symbol-table'>{symbolTable}</h1>
			<sub>{name}</sub>
			<sub>{weight}</sub>
		</ElementTableStyled>
	);
};

export default ElementTable;
