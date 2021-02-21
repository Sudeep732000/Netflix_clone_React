import {React} from 'react';
import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Row from './Row';
import requests from './request';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import { useStateValue } from './StateProvider';

function App() {
  const [{user},dispatch] = useStateValue();
  
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ):(
          <Switch>
          <Route path="/">
            <Navbar />
            <Banner />
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
          </Route>
        </Switch>
        )}
       
      </Router> 
    </div>
  );
}

export default App;
