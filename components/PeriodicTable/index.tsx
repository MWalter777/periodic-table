import React, { useState } from 'react';
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
	name: string;
	changeName: ({
		target: { value },
	}: {
		target: {
			value: string;
		};
	}) => void;
};

const PeriodicTable = ({ elements, changeName, name }: Props) => {
	return (
		<PeriodicTableStyled>
			<HeaderStyled>
				<div>
					<h1>Periodic Table</h1>
				</div>
			</HeaderStyled>
			<input
				onChange={changeName}
				className='type-element'
				type='text'
				placeholder='Element...'
				value={name}
			/>
			{elements.map((element, index) => {
				return (
					<RowTableStyled key={index}>
						{element.map((e) => {
							if (e.atomicNumber === 0) return <EmptyElement />;
							return (
								<ElementTable
									atomicNumber={e.atomicNumber}
									backgroundColor={e.backgroundColor}
									name={e.name}
									symbolTable={e.symbolTable}
									weight={e.weight}
									key={e.atomicNumber}
									display={!!e.display}
								/>
							);
						})}
					</RowTableStyled>
				);
			})}
		</PeriodicTableStyled>
	);
};

export default PeriodicTable;
