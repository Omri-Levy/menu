import React from 'react';
import MenuItem from '../MenuItem';
import {Props} from './types';

const Menu: React.FunctionComponent<Props> = ({menuItems}) => {
	return (
		<ul>
			{menuItems.map((item) => <MenuItem key={item.id} item={item}/>)}
		</ul>
	);
};

export default Menu;
