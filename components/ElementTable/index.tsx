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
	changeSelected: (value: string) => void;
	selected: string;
};

const ElementTable = ({
	backgroundColor,
	atomicNumber,
	name,
	symbolTable,
	weight,
	display,
	changeSelected,
	selected,
}: Props) => {
	return (
		<ElementTableStyled
			backgroundColor={backgroundColor}
			/* onClick={() => {
				!display && changeSelected(name === selected ? '' : name);
			}} */
			className={`${name === selected ? 'selected' : ''} ${
				display ? '' : 'hide'
			}`}
		>
			{display && (
				<>
					<sup className='atomic-number'>{atomicNumber}</sup>
					<h1 className='symbol-table'>{symbolTable}</h1>
					<sub>{getElementName(name.toLowerCase() as keysElements)[0]}</sub>
					<sub>{weight}</sub>
				</>
			)}
		</ElementTableStyled>
	);
};

export default ElementTable;
