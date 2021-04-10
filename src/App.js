import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Lodging from './components/Lodging';
import MainInfo from './components/MainInfo';
import OurStory from './components/OurStory';
import ThingsToDo from './components/ThingsToDo';

function App() {
  return (
    <div className="app">
      <Header />
      <MainInfo />
      <OurStory />
      <Lodging />
      <ThingsToDo />
      <Footer />
    </div>
  );
}

export default App;
