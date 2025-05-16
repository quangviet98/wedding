import './App.css';
import Gallery from './components/Gallery';
import HeroSection from './components/HeroSection';
import Introduce from './components/Introduce';
import Stories from './components/Stories';
import Timeline from './components/Timeline';

function App() {
  return (
    <>
      <HeroSection />
      <Stories />
      <Introduce />
      <Timeline />
      <Gallery />
    </>
  );
}

export default App;
