import { getElementName } from 'utils/getElementName';
import { elements } from './englishElements';
import { keysElements } from './parserElements';

// elements in spanish
export const elementsES = elements.map((elementsEn) => {
	return elementsEn.map((element) => {
		if (element.atomicNumber === 0) return element;
		return {
			...element,
			name: getElementName(element.name.toLowerCase() as keysElements)[0],
		};
	});
});
