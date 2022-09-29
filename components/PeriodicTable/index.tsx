import React, { RefObject } from 'react';
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
	changeSelected: (name?: string) => void;
	selected: string;
	focusRef: RefObject<HTMLInputElement>;
};

const PeriodicTable = ({
	elements,
	changeName,
	name,
	changeSelected,
	selected,
	focusRef,
}: Props) => {
	return (
		<PeriodicTableStyled>
			<HeaderStyled>
				<div>
					<h1>Periodic Table</h1>
				</div>
			</HeaderStyled>
			<div className='input-control'>
				<input
					onChange={changeName}
					className='type-element'
					type='text'
					placeholder='Element...'
					value={name}
					ref={focusRef}
				/>
				<button className='btn-random' onClick={() => changeSelected()}>
					Random
				</button>
			</div>
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
									selected={selected}
									changeSelected={changeSelected}
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
