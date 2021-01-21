import './App.css';
import React, {useState} from 'react';
import {HelmetProvider} from 'react-helmet-async';
import Head from '../Head';
import Menu from '../Menu';
import Categories from '../Categories';
import menu from '../../data';

const App: React.FunctionComponent = () => {
	const [menuItems, setMenuItems] = useState(menu);
	const allCategories = [`all`, ...new Set(menu.map(({category}) => category),
	)];
	const filterMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		const value = event.currentTarget.value.toLowerCase();

		if (value === `all` || !allCategories.includes(value)) {
			return setMenuItems(menu);
		}

		const newMenu = menu.filter(({category}) => {
			return category === value;
		});

		return setMenuItems(newMenu);
	};

	return (
		<HelmetProvider>
			<Head/>
			<main className={'app'}>
				<header>
					<div className='title'>
						<h1>
							Our Menu
						</h1>
						<span/>
					</div>
					<Categories filterMenu={filterMenu}
								allCategories={allCategories}/>
				</header>
				<section>
					<Menu menuItems={menuItems}/>
				</section>
			</main>
		</HelmetProvider>
	);
};

export default App;
