import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Videogames from './components/Videogames/Videogames'
import Videogame from './components/VideogameDetail/VideogameDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = '/' component = {LandingPage}/>
        <Route exact path = '/videogames' component = {Videogames}/>
        <Route exact path = '/videogames/:id' component = {Videogame}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
