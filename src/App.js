import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from "./Components/Navbar/Nav";
import Search from "./Components/SearchPage/Search";
import GameDetail from "./Components/DetailPage/GameDetail";
import WishList from './Components/WishListPage/WishList';
import Genres from './Components/GenresPage/Genres';
import Home from './Components/HomePage/Home';
import PlatformForGame from './Components/PlatformPage/PlatformForGame';

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Nav/>
            <Switch>
            <Route exact path='/' component={Home} />
              <Route exact path='/search' component={Search} />
              <Route path='/game/:name' component={GameDetail} />
              <Route exact path='/genres' component={Genres}/>
              <Route exact path='/platform' component={PlatformForGame}/>
              <Route exact path='/wishlist' component={WishList}/>
            </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;



