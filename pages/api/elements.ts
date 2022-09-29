// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IElement } from 'interfaces/IElement';
import type { NextApiRequest, NextApiResponse } from 'next';

const elements: IElement[][] = [
	[
		{
			atomicNumber: 1,
			symbolTable: 'H',
			backgroundColor: '#f1f1f1',
			name: 'Hydrogen',
			weight: 1.0079,
		},
		{
			atomicNumber: 2,
			symbolTable: 'He',
			backgroundColor: '#d9ffff',
			name: 'Helium',
			weight: 4.0026,
		},
		{
			atomicNumber: 3,
			symbolTable: 'Li',
			backgroundColor: '#cc80ff',
			name: 'Lithium',
			weight: 6.941,
		},
	],
];

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IElement[][]>
) {
	res.status(200).json(elements);
}
