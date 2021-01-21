import React from 'react';
import './Categories.css';
import {Props} from './types';

const Categories: React.FunctionComponent<Props> = ({
														filterMenu,
														allCategories,
													}) => {
	return (
		<div role={`group`}>
			{allCategories.map((category) => (
				<button key={category} onClick={filterMenu} value={category}>
					{category}
				</button>
			))}
		</div>
	);
};
export default Categories;
