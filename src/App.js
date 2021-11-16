import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeView from './components/views/HomeView';
import SearchSongView from './components/views/SearchSongView';
import AboutUsView from './components/views/AboutUsView';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App d-flex flex-column">
      
      <Router>
        <Header/>
        <Switch>
          <Route path="/buscarCancion" component={SearchSongView}/>
          <Route path="/acercaDe" component={AboutUsView}/>
          <Route exact path="/" component={HomeView}/>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
