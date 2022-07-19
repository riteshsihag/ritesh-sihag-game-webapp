import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import SearchList from './SearchList'
import './Search.css'
const Search = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
		const gameFavourites = JSON.parse(
			localStorage.getItem('gaming-app')
		);

		if (gameFavourites) {
			setFavourites(gameFavourites);
		}
	}, []);

  const saveToLocalStorage = (games) => {
		localStorage.setItem('gaming-app', JSON.stringify(games));
	};

  const addFavouriteGame = (games) => {
    const newFavouriteList = [...favourites, games];
    setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
};
const removeFavouriteGame = (games) => {
  const newFavouriteList = favourites.filter(
    (favourite) => favourite.id !== games.id
  );

  setFavourites(newFavouriteList);
  saveToLocalStorage(newFavouriteList);

};
  const [searchTerm, setSearchTerm] = useState("")
  const [gameResults, setGameResults] = useState([])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let slug = searchTerm.split(' ').join('-').toLowerCase()

    setGameResults([])
    fetch(`https://rawg.io/api/games?search=${slug}&key=a06b8926e25c4a1686be32ff57d7997a`)
    .then(resp => resp.json())
    .then(({results}) => {
      results === undefined ? alert('no games found') : setGameResults(results)
    })
    setSearchTerm("")
  }

  return (

    <div className="game_search">
        <form className='search_submit' onSubmit={onSubmit}>
          <input className='search_box' type="text" value={searchTerm} onChange={handleChange} placeholder="Search here"/>
          <br></br>
          <input className='submit_btn' type="submit"/>
        </form>
        {SearchList===[]?(
          <div className='search_list'>
      <SearchList games={favourites}
      handleFavouritesClick={removeFavouriteGame}/>):(
        </div>
        ):<>
        <h1 className='result_txt' >Result for your Search</h1>
         <SearchResults gameResults={gameResults} 
         addFavouriteGame = {addFavouriteGame}
         /> </>}
      </div>
  );
}
export default Search;



