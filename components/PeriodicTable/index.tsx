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
	name: string;
	changeName: ({
		target: { value },
	}: {
		target: {
			value: string;
		};
	}) => void;
	changeSelected: (value: string) => void;
	selected: string;
};

const PeriodicTable = ({
	elements,
	changeName,
	name,
	changeSelected,
	selected,
}: Props) => {
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
						{element.map((e, index2) => {
							if (e.atomicNumber < 0)
								return (
									<EmptyElement
										key={`${index}-key-${e.atomicNumber * index2}`}
									/>
								);
							return (
								<ElementTable
									atomicNumber={e.atomicNumber}
									backgroundColor={e.backgroundColor}
									name={e.name}
									symbolTable={e.symbolTable}
									weight={e.weight}
									key={e.atomicNumber}
									display={!!e.display}
									changeSelected={changeSelected}
									selected={selected}
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
