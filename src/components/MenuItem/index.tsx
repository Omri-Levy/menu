import React from 'react';
import {Props} from './types';
import './MenuItem.css';

const MenuItem: React.FunctionComponent<Props> = ({item}) => {
	return (
		<li>
			<div className={`container`}>
				<div className={`box`}>
					<img src={item.img} alt={item.title}/>
				</div>
				<div className={`box`}>
					<header>
						<div className={`heading`}>
							<h4>
								{item.title}
							</h4>
							<h4>
								${item.price}
							</h4>
						</div>
						<p>{item.desc}</p>
					</header>
				</div>
			</div>
		</li>
	);
};
export default MenuItem;
