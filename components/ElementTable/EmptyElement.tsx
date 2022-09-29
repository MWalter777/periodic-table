import React from 'react';
import { ElementTableStyled } from './index.style';

const EmptyElement = () => {
	return (
		<ElementTableStyled
			backgroundColor='#fff'
			style={{ visibility: 'hidden' }}
		></ElementTableStyled>
	);
};

export default EmptyElement;
