import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Lodging from './components/Lodging';
import MainInfo from './components/MainInfo';
import OurStory from './components/OurStory';
import ThingsToDo from './components/ThingsToDo';
import WeddingParty from './components/WeddingParty';
import Questions from './components/Questions';
import RSVP from './components/RSVP';
import { useEffect, useState } from 'react';

const App = () => {
  const [weddingData, setWeddingData] = useState({});

  useEffect(() => {
    fetch('/weddingData.json')
      .then((res) => res.json())
      .then((data) => {
        setWeddingData(data);
      });
  }, []);
  return (
    <div className="app">
      <Header />
      <MainInfo />
      <RSVP data={weddingData.rsvp} />
      <OurStory />
      <Lodging />
      <ThingsToDo />
      <WeddingParty />
      <Questions />
      <Footer />
    </div>
  );
};

export default App;
