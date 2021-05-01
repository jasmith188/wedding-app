import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
// import Header from './components/Header';
import Lodging from './components/Lodging';
import MainInfo from './components/MainInfo';
import OurStory from './components/OurStory';
import ThingsToDo from './components/ThingsToDo';
import WeddingParty from './components/WeddingParty';
import Questions from './components/Questions';
import RSVP from './components/RSVP';

const App = () => {
  return (
    <div className="app">
      <Router>
        {/* <Header /> */}
        <header className="header-fixed">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#home" title="Hide navigation">
              Hide navigation
            </a>

            <ul id="nav" className="nav">
              <li className="smoothscroll">
                <Link to="/home">Home</Link>
              </li>
              <li className="smoothscroll">
                <Link to="/rsvp">RSVP</Link>
              </li>
              <li className="smoothscroll">
                <Link to="/ourstory">Our Story</Link>
              </li>

              <li className="smoothscroll">
                <Link to="/lodging">Lodging</Link>
              </li>
              <li className="smoothscroll">
                <Link to="/thingstodo">Things To Do</Link>
              </li>
              <li className="smoothscroll">
                <Link to="/weddingparty">Wedding Party</Link>
              </li>
              <li className="smoothscroll">
                <Link to="/questions">Q + A</Link>
              </li>
              <li className="smoothscroll">
                <Link to="/registry">Registry</Link>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text"></div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
        <Route path="/home">
          <MainInfo />
        </Route>

        <Route path="/rsvp">
          <RSVP />
        </Route>
        <Route path="/ourstory">
          <OurStory />
        </Route>
        <Route path="/lodging">
          <Lodging />
        </Route>
        <Route path="/thingstodo">
          <ThingsToDo />
        </Route>
        <Route path="/weddingparty">
          <WeddingParty />
        </Route>
        <Route path="/questions">
          <Questions />
        </Route>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

// import './App.css';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Lodging from './components/Lodging';
// import MainInfo from './components/MainInfo';
// import OurStory from './components/OurStory';
// import ThingsToDo from './components/ThingsToDo';
// import WeddingParty from './components/WeddingParty';
// import Questions from './components/Questions';
// import RSVP from './components/RSVP';
// import { useEffect, useState } from 'react';

// const App = () => {
//   const [weddingData, setWeddingData] = useState({});

//   useEffect(() => {
//     fetch('/weddingData.json')
//       .then((res) => res.json())
//       .then((data) => {
//         setWeddingData(data);
//       });
//   }, []);
//   return (
//     <div className="app">
//       <Header />
//       <MainInfo />
//       <RSVP data={weddingData.rsvp} />
//       <OurStory />
//       <Lodging />
//       <ThingsToDo />
//       <WeddingParty />
//       <Questions />
//       <Footer />
//     </div>
//   );
// };

// export default App;
