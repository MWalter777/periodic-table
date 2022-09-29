import ElementTable from 'components/ElementTable';
import EmptyElement from 'components/ElementTable/EmptyElement';
import React from 'react';
import {
	HeaderStyled,
	PeriodicTableStyled,
	RowTableStyled,
} from './index.style';

const PeriodicTable = () => {
	return (
		<PeriodicTableStyled>
			<HeaderStyled>
				<div>
					<h1>Periodic Table</h1>
				</div>
			</HeaderStyled>
			<RowTableStyled>
				<ElementTable
					backgroundColor='#f1f1f1'
					weight={40.796}
					atomicNumber={1}
					name='Hydrogen'
					symbolTable='H'
				/>
				<ElementTable
					backgroundColor='#f1f1f1'
					weight={40.796}
					atomicNumber={1}
					name='Hydrogen'
					symbolTable='H'
				/>
			</RowTableStyled>
		</PeriodicTableStyled>
	);
};

export default PeriodicTable;
