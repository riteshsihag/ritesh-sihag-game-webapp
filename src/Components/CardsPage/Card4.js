import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Card4.css'
import HomeList from '../HomePage/HomeList';
const Card4 = (props) => {
    const [favourites2, setFavourites2] = useState([]);

    const [games, setGames] = useState([])

    useEffect(() => {
        fetchGames()
    }, [])

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
        fetch(`${props.url}`)
            .then(resp => resp.json())
            .then(({ results }) => setGames(results))
    }
    return (
        <div>
            {HomeList === [] ? (
                <HomeList game={favourites2}
                    handleFavouritesClick2={removeFavouriteGame2}
                />
            ) : (
                <div className='Card4_main_container'>
                    <h1>{props.title}</h1>
                    <ul className='Card4_container'>
                        {games?.map(game => (
                            <li className='Card4_game' key={game.id}>
                                <Link to={{ pathname: `/game/${game.name}`, gameProps: { game: game } }}>
                                    <img src={game.background_image} alt="game" />
                                    <div className="Card4_content">
                                        <h3 className='Card4_name'>{game.name} </h3>
                                        <h3 className='Card4_genres'>{game.genres.map(g => `${g.name} | `)}</h3>
                                        
                                    </div>
                                </Link>
                                <video controls="controls" className='Card4_video'>
                                            <source className='Card4_video_component'
                                                src={game.clip?.clips?.full}
                                                type="video/mp4"
                                            />
                                            Your browser does not support the video tag.
                                        </video>
                                <button
                                    className='Card4_btn'
                                    onClick={() => addFavouriteGame2(game)}
                                >Add to WishList</button>
                            </li>
                        ))
                        }
                    </ul>

                </div>
            )}
        </div>

    )
}

export default Card4;