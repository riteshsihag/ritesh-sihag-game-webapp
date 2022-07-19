import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import HomeList from '../HomePage/HomeList';
const Card3 = (props) => {
  const [favourites2, setFavourites2] = useState([]);

  const [games, setGames] = useState([])

  useEffect(() => {
    fetchGames()
  },[])

  useEffect(() => {
		const gameFavourites = JSON.parse(
			localStorage.getItem('gaming-app')
		);

		if (gameFavourites) {
			setFavourites2(gameFavourites);
		}
	}, []);

  const saveToLocalStorage = (games) => {
		localStorage.setItem('gaming-app', JSON.stringify(games));
	};

  const addFavouriteGame2 = (games) => {
    const newFavouriteList2 = [...favourites2, games];
    setFavourites2(newFavouriteList2);
    saveToLocalStorage(newFavouriteList2);

  };

  const removeFavouriteGame2 = (games) => {
    const newFavouriteList2 = favourites2.filter(
      (favourite2) => favourite2.id !== games.id
    );
  
    setFavourites2(newFavouriteList2);
  saveToLocalStorage(newFavouriteList2);

  };


  const fetchGames = () => {
    fetch(`${props.link}`)
      .then(resp => resp.json())
      .then(({ results }) => setGames(results))
  }
  return (
    <div>
      {HomeList === [] ?(
      <HomeList game={favourites2} 
      handleFavouritesClick2={removeFavouriteGame2}
      />
      ):(
        <div className='game_main_container'>
        <h1>{props.heading}</h1>
        <ul className='game_container'>
          {games?.map(game => (
            <div className="game_child">
            <li className='list_game' key={game.id}>
              <Link className='game_details' to={{ pathname: `/game/${game.name}`, gameProps: { game: game } }}>
                <img src={game.background_image} alt="game" />
                <div className="game_content">
                <h3 className='game_name'>{game.name}</h3>
                <h3 className='game_genres'>{game.genres.map(g => `${g.name} | `)}</h3>
                <p className='game_release'>Release: {game.released}</p>
                <p className='game_rating'>Rating: {game.rating}</p>
                <button className='Info_btn'>More Info</button>
                </div>
              </Link>
              <button
              className='game_btn'
                onClick={() => addFavouriteGame2(game)}
              >Add to WishList</button>
            </li></div>
          ))
          }
        </ul>
      </div>
      )}
    </div>

  )
}

export default Card3;