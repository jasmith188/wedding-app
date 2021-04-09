import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Lodging from './components/Lodging';
import MainInfo from './components/MainInfo';
import OurStory from './components/OurStory';

function App() {
  return (
    <div className="app">
      <Header />
      <MainInfo />
      <OurStory />
      <Lodging />
      <Footer />
    </div>
  );
}

export default App;
