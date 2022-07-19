import React from 'react';
import { Link } from 'react-router-dom';
import HomeList from '../HomePage/HomeList';

const SearchList = (props) => {
	
  return (
    <div className="results-container">
      <ul>
        <HomeList/>
      {
        props.games?.map(game => (
          <li key={game.id}>

            <Link to={{
              pathname: `/game/${game.name}`,
              gameProps:{
                game: game
              }
            }}>
            <h3>{game.name}</h3>
            <img src={game.background_image} alt="game"/>
            </Link>
            <button onClick={() =>  props.handleFavouritesClick(game)}>
                Remove from WishList
              </button>
          </li>
        ))
      }
      </ul>
    </div>
  );
}

export default SearchList;


