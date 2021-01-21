import './App.css';
import React from 'react';
import {HelmetProvider} from 'react-helmet-async';
import Head from '../Head';

const App: React.FunctionComponent = () => {
	return (
		<HelmetProvider>
			<Head/>
			<div className={'app'}>
				<h1>Hello from App.</h1>
			</div>
		</HelmetProvider>
	);
};

export default App;
