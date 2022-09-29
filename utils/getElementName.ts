import { elementsParser, keysElements } from 'data/parserElements';

// function recieve a name of element of periodic table and return the element in spanish
export const getElementName = (name: keysElements): string[] => {
	return elementsParser[name] || [''];
};
