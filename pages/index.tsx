import PeriodicTable from 'components/PeriodicTable';
import { useEffect, useState } from 'react';
import { IElement } from 'interfaces/IElement';

const Home = () => {
	const [name, setName] = useState('');
	const changeName = ({ target: { value } }: { target: { value: string } }) => {
		setName(value);
	};
	const [elements, setElements] = useState<IElement[][]>([]);
	const findElement = (name: string) => {
		const newElements = elements.map((element) => {
			return element.map((e) => {
				if (e.name.toLowerCase() === name.toLowerCase()) {
					setName('');
					return { ...e, display: true };
				}
				return { ...e };
			});
		});
		setElements(newElements);
	};
	useEffect(() => {
		if (name) findElement(name);
	}, [name]);

	useEffect(() => {
		const getElements = async () => {
			const response = await fetch('/api/elements');
			const data: IElement[][] = await response.json();
			setElements(data);
		};
		getElements();
	}, []);
	return (
		<PeriodicTable name={name} changeName={changeName} elements={elements} />
	);
};

export default Home;
