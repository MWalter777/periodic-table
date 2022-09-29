import React from 'react';
import { ElementTableStyled } from './index.style';

type Props = {
	backgroundColor: `#${string}`;
	atomicNumber: number;
	symbolTable: string;
	name: string;
	weight: number;
	display: boolean;
};

const ElementTable = ({
	backgroundColor,
	atomicNumber,
	name,
	symbolTable,
	weight,
	display,
}: Props) => {
	return (
		<ElementTableStyled backgroundColor={backgroundColor}>
			{display && (
				<>
					<sup className='atomic-number'>{atomicNumber}</sup>
					<h1 className='symbol-table'>{symbolTable}</h1>
					<sub>{name}</sub>
					<sub>{weight}</sub>
				</>
			)}
		</ElementTableStyled>
	);
};

export default ElementTable;
