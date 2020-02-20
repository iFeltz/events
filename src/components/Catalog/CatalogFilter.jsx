import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../Filters/Search';
import Categories from '../Filters/Categories';
import Favorites from '../Filters/Favorites';
import * as actions from '../../actions';

import './CatalogFilter.sass';

const CatalogFilter = ({
	search,
	category,
	priceSort,
	favoritesOnly,
	updateFilter
}) => {
	const [filter, setFilter] = useState({
		search: search || '',
		category,
		priceSort,
		favoritesOnly
	});

	useEffect(() => {
		updateFilter(filter);
		// eslint-disable-next-line
	}, [filter]);

	const handleSearch = event => {
		setFilter({ ...filter, search: event.target.value });
	};

	const handleCategorySelect = id => {
		setFilter({ ...filter, category: id });
	};

	const handleFavorites = value => {
		setFilter({ ...filter, favoritesOnly: value });
	};

	return (
		<div className="catalog-filter">
			<div className="catalog-filter__search">
				<Search query={filter.search} handleSearch={handleSearch} />
			</div>
			<div className="catalog-filter__categories">
				<Categories handleSelect={handleCategorySelect} />
			</div>
			<div className="catalog-filter__favorites">
				<Favorites handleChange={handleFavorites} />
			</div>
		</div>
	);
};

const mapStateToProps = ({
	filter: { search, category, priceSort, favoritesOnly }
}) => ({
	search,
	category,
	priceSort,
	favoritesOnly
});

export default connect(mapStateToProps, actions)(CatalogFilter);
