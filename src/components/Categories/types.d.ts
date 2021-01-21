import React from 'react';

interface Props {
	filterMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
	allCategories: string[];
}

export {Props};
