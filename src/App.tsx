import './App.css';
import Gallery from './components/Gallery';
import HeroSection from './components/HeroSection';
import Timeline from './components/Timeline';
import Introduce from './components/Introduce';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Timeline />
      <Introduce />
      <Gallery />
    </div>
  );
}

export default App;
