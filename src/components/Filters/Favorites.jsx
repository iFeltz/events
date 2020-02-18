import React, { useState } from 'react';
import './Favorites.sass';

const Favorites = ({ handleChange }) => {
	const [active, setActive] = useState(false);

	const onChange = () => {
		handleChange(!active);
		setActive(!active);
	};

	return (
		<div
			className={'favorites' + (active ? ' active' : '')}
			title="Избранное"
			onClick={onChange}
		>
			<i className="material-icons">
				{active ? 'favorite' : 'favorite_border'}
			</i>
		</div>
	);
};

export default Favorites;
