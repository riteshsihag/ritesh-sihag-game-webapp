import React from 'react';
import { Link } from 'react-router-dom';
import SearchList from '../SearchPage/SearchList';
const HomeList = (props) => {
    
  return (
    <div className="result_main_container">
      <ul className='result_container'>
      { 
        props.game?.map(game => (
          <div className="game_child">
          <br /> <br />
          <li className='list_game' key={game.count}>
              <SearchList/>
              <Link className='game_link' to={{pathname: `/game/${game.name}`,gameProps:{  game: game }}}>
            <img src={game.background_image} alt="game" />
                <div className="game_content">
                <h3 className='game_name'>{game.name}</h3>
                <h3 className='game_genres'>{game.genres.map(g => `${g.name} | `)}</h3>
                <p className='game_release'>Release: {game.released}</p>
                <p className='game_rating'>Rating: {game.rating}</p>
                <button className='Info_btn'>More Info</button>
                </div> 
            </Link>
            <button className='game_btn' style={{marginRight: "-44px"}} onClick={() =>  props.handleFavouritesClick2(game)}>
                Remove from WishList
              </button>
          </li></div>
        ))
      }
      </ul>
    </div>
  );
}

export default HomeList;


