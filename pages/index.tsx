import PeriodicTable from 'components/PeriodicTable';
import { useEffect, useRef, useState } from 'react';
import { IElement } from 'interfaces/IElement';
import { elementsParser, keysElements } from 'data/parserElements';

const Home = () => {
	const [name, setName] = useState('');
	const [selected, setSelected] = useState('');
	const [selectedElements, setSelectedElements] = useState<string[]>([]);
	const focusRef = useRef<HTMLInputElement>(null);
	const [allElements, setAllElements] = useState<string[]>(
		Object.keys(elementsParser)
	);
	const changeName = ({ target: { value } }: { target: { value: string } }) => {
		setName(value);
	};
	const [elements, setElements] = useState<IElement[][]>([]);
	const findElement = (name: string) => {
		const allkeys = Object.keys(elementsParser) as keysElements[];
		const resultName: keysElements[] = allkeys.filter((element) =>
			elementsParser[element].includes(name)
		);
		if (resultName.length === 1) {
			const newElements = elements.map((element) => {
				return element.map((e) => {
					if (
						(!e.display &&
							(!selected || resultName[0] === selected.toLowerCase()) &&
							e.name.toLowerCase() === resultName[0]) ||
						e.name.toLowerCase() === resultName[0]
					) {
						setName('');
						setSelected('');
						setSelectedElements([...selectedElements, resultName[0]]);
						setAllElements(allElements.filter((e) => e !== resultName[0]));
						changeSelected();
						return { ...e, display: true };
					}
					return { ...e };
				});
			});
			setElements(newElements);
		}
	};
	useEffect(() => {
		if (name) findElement(name);
	}, [name]);

	const changeSelected = (name?: string) => {
		const randomElement = name
			? name
			: allElements[Math.floor(Math.random() * allElements.length)];
		setSelected(randomElement);
		focusRef.current?.focus();
	};

	useEffect(() => {
		const getElements = async () => {
			const response = await fetch('/api/elements');
			const data: IElement[][] = await response.json();
			setElements(data);
			changeSelected();
		};
		getElements();
	}, []);

	return (
		<PeriodicTable
			changeSelected={changeSelected}
			name={name}
			changeName={changeName}
			elements={elements}
			selected={selected}
			focusRef={focusRef}
		/>
	);
};

export default Home;
