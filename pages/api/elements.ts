// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { IElement } from 'interfaces/IElement';
import { elements } from 'data/englishElements';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IElement[][]>
) {
	res.status(200).json(elements);
}
