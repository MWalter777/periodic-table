import { keysElements } from 'data/parserElements';
import React from 'react';
import { getElementName } from 'utils/getElementName';
import { ElementTableStyled } from './index.style';

type Props = {
	backgroundColor: `#${string}`;
	atomicNumber: number;
	symbolTable: string;
	name: string;
	weight: number;
	display: boolean;
	selected: string;
};

const ElementTable = ({
	backgroundColor,
	atomicNumber,
	name,
	symbolTable,
	weight,
	display,
	selected,
}: Props) => {
	return (
		<ElementTableStyled
			backgroundColor={backgroundColor}
			className={`${name.toLowerCase() === selected ? 'selected' : ''} ${
				display ? '' : 'hide'
			}`}
		>
			<sup className='atomic-number'>{atomicNumber}</sup>
			{display && (
				<>
					<h1 className='symbol-table'>{symbolTable}</h1>
					<sub>{getElementName(name.toLowerCase() as keysElements)[0]}</sub>
					<sub>{weight}</sub>
				</>
			)}
		</ElementTableStyled>
	);
};

export default ElementTable;
