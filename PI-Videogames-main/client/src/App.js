import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Videogames from './components/Videogames/Videogames'
import Videogame from './components/VideogameDetail/VideogameDetail';
import VideogameCreate from './components/VideogameCreate/VideogameCreate'
import Error404 from './components/Error404/Error404'
import Error4044 from './components/Error404/Error4044';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = '/' component = {LandingPage}/>
        <Route exact path = '/videogames' component = {Videogames}/>
        <Route exact path = '/videogames/:id' component = {Videogame}/>
        <Route exact path = '/create' component={VideogameCreate}/>
        <Route exact path = '/error' component={Error4044}/>
        <Route path= '*' component={Error404}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
