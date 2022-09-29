import PeriodicTable from 'components/PeriodicTable';
import { useEffect, useState } from 'react';
import { IElement } from 'interfaces/IElement';

const Home = () => {
	const [elements, setElements] = useState<IElement[][]>([]);

	useEffect(() => {
		const getElements = async () => {
			const response = await fetch('/api/elements');
			const data: IElement[][] = await response.json();
			setElements(data);
		};
		getElements();
	}, []);
	return <PeriodicTable elements={elements} />;
};

export default Home;
