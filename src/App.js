import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
// import Header from './components/Header';
import Lodging from './components/Lodging';
import MainInfo from './components/MainInfo';
import RSVP from './components/RSVP';
import OurStory from './components/OurStory';
import ThingsToDo from './components/ThingsToDo';
import WeddingParty from './components/WeddingParty';
import Questions from './components/Questions';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={MainInfo} />
          <Route path="/rsvp" component={RSVP} />
          <Route path="/ourstory" exact component={OurStory} />
          <Route path="/lodging" exact component={Lodging} />
          <Route path="/thingstodo" exact component={ThingsToDo} />
          <Route path="/weddingparty" exact component={WeddingParty} />
          <Route path="/questions" exact component={Questions} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
