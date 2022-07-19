import React from 'react';

const SearchBox = (props) => {
	return (
		<div className="search">
		<input className='form-control' value={props.value} onChange={(event) =>props.setSearchTerm(event.target.value)}
	 type="text" name="search" id="search" placeholder="Search movies here" />
	</div>
	);
};

export default SearchBox;
