import './GameDetail.css';
const GameDetail = (props) => {

  const { game } = props.location.gameProps
  console.log(props)

  return (
    <div className='detail_main_container'>
      <div className="detail_container">
      <h2 className="detail_heading" >GAME DETAILS</h2>
      <h2 className="detail_name" >{game.name}</h2>
      <p className="detail_release" > <strong>Release: </strong>{game.released}</p>
      <p className="detail_rating" ><strong>Rating: </strong> {game.rating}</p>
      <p className="detail_genre" > <strong>Genre(s):</strong>{ game.genres.map(g => `${g.name} | `)}</p>
      <p className="detail_platform" > <strong>Platform(s):</strong> {game.platforms.map(p => `${p.platform.name} | `) }</p>
        <h3 className='detail_swipe'>Swipe Right For More Images {"->>"}</h3>
         </div>
         <ul className="detail_ss_container" >
        <li className='detail_screenshot' >
      {game.short_screenshots.map(ss =><li className='screenshot_container'> <img className='screenshot' src={ss.image} alt='screenshot'></img></li>)}</li>
      </ul>
    </div>
  );
}

export default GameDetail;




