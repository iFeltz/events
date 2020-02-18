import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Categories.sass';

const Categories = ({
	categories,
	events,
	favoriteEvents,
	favoritesOnly,
	handleSelect
}) => {
	const [activeCat, setActiveCat] = useState({
		slug: null,
		name: 'Выберите категорию'
	});
	const [availableCategories, setAvailableCategories] = useState([]);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		handleSelect(activeCat.slug);
		// eslint-disable-next-line
	}, [activeCat]);

	useEffect(() => {
		let arr;
		if (favoritesOnly) {
			arr = favoriteEvents.reduce(
				(acc, event) => [...acc, ...event.categories],
				[]
			);
		} else
			arr = events.reduce((acc, event) => [...acc, ...event.categories], []);
		// remove non-unique categories
		arr = [...new Set(arr)];

		// categories on events have only slug :(
		// selecting actual categories with names
		const res = categories.filter(cat => arr.includes(cat.slug));

		const dropdownList = document.getElementById('cat-dropdown__list');
		if (res.length < 10) {
			dropdownList.style.maxHeight = (res.length || 1) * 42 + 'px';
		} else {
			dropdownList.style.maxHeight = '400px';
		}

		setAvailableCategories(res);
	}, [categories, events, favoritesOnly, favoriteEvents]);

	// if clicked out of dropdown, close the dropdown
	document.body.addEventListener('click', e => {
		if (!open) return;

		let elem = document.getElementById('cat-dropdown');
		if (elem && elem !== e.target && !elem.contains(e.target)) {
			setOpen(false);
		}
	});

	// if Esc is pressed, close the dropdown
	document.body.addEventListener('keyup', e => {
		if (!open) return;

		if (e.keyCode === 27) setOpen(false);
	});

	const toggleDropdown = () => {
		setOpen(!open);
	};

	const onChange = id => {
		let cat = availableCategories.find(c => c.id === id);
		setActiveCat(cat);
	};

	const resetCat = () => {
		setActiveCat({
			slug: null,
			name: 'Выбрать категорию'
		});
	};

	const renderCategoryList = () => {
		if (!availableCategories.length)
			return (
				<div className="categories-dropdown__empty">
					<span>Ничего не найдено :(</span>
				</div>
			);

		return (
			<ul className="categories-dropdown__list">
				{availableCategories.map(cat => (
					<li
						className="categories-dropdown__item"
						key={cat.slug}
						onClick={onChange.bind(null, cat.id)}
					>
						{cat.name}
					</li>
				))}
			</ul>
		);
	};

	return (
		<div id="cat-dropdown" className="categories" onClick={toggleDropdown}>
			<div className="categories-select" title={activeCat.name}>
				{activeCat.name}
				<i className="material-icons" onClick={resetCat}>
					{activeCat.id ? 'clear' : 'arrow_drop_down'}
				</i>
			</div>
			<div
				id="cat-dropdown__list"
				className={'categories-dropdown' + (open ? ' active' : '')}
			>
				{renderCategoryList()}
			</div>
		</div>
	);
};

const mapStateToProps = ({
	categories,
	events,
	filter: { favoritesOnly },
	favoriteEvents
}) => ({
	categories,
	events,
	favoritesOnly,
	favoriteEvents
});

export default connect(mapStateToProps, null)(Categories);
