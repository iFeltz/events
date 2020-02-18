import React from 'react';
import './Search.sass';

const Search = ({ query, handleSearch }) => {
	const resetSearch = () => {
		query = '';
		handleSearch({
			target: {
				value: query
			}
		});
	};

	return (
		<div className="search-wrapper">
			<input
				type="text"
				placeholder="Search"
				value={query}
				onChange={handleSearch}
				className="input-label"
			/>
			{query && (
				<i className="material-icons clear" onClick={resetSearch}>
					clear
				</i>
			)}
		</div>
	);
};

export default Search;
