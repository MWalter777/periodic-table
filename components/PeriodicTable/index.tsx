import ElementTable from 'components/ElementTable';
import React from 'react';
import { PeriodicTableStyled, RowTableStyled } from './index.style';

const PeriodicTable = () => {
	return (
		<PeriodicTableStyled>
			<RowTableStyled>
				<ElementTable />
			</RowTableStyled>
		</PeriodicTableStyled>
	);
};

export default PeriodicTable;
