import { IElement } from 'interfaces/IElement';

export const getEmptyElements = (quantity: number): IElement[] => {
	return new Array(quantity).fill({
		atomicNumber: -1,
		symbolTable: '',
		name: '',
		weight: 0,
		backgroundColor: '#fff',
	});
};
