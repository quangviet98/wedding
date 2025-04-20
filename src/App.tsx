import './App.css';
import Gallery from './components/Gallery';
import HeroSection from './components/HeroSection';
import Informations from './components/Informations';
import Introduce from './components/Introduce';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Informations />
      <Introduce />
      <Gallery />
    </div>
  );
}

export default App;
