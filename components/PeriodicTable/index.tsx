import React from 'react';
import ElementTable from 'components/ElementTable';
import EmptyElement from 'components/ElementTable/EmptyElement';
import { IElement } from 'interfaces/IElement';
import {
	HeaderStyled,
	PeriodicTableStyled,
	RowTableStyled,
} from './index.style';

type Props = {
	elements: IElement[][];
};

const PeriodicTable = ({ elements }: Props) => {
	return (
		<PeriodicTableStyled>
			<HeaderStyled>
				<div>
					<h1>Periodic Table</h1>
				</div>
			</HeaderStyled>
			<RowTableStyled>
				{elements.map((element) => {
					return element.map((e) => (
						<ElementTable
							atomicNumber={e.atomicNumber}
							backgroundColor={e.backgroundColor}
							name={e.name}
							symbolTable={e.symbolTable}
							weight={e.weight}
							key={e.atomicNumber}
						/>
					));
				})}
			</RowTableStyled>
		</PeriodicTableStyled>
	);
};

export default PeriodicTable;
