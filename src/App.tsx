// App.jsx
import CountdownTimer from "./components/CountdownTimer";
import Gallery from "./components/Gallery";
import HeroSection from "./components/HeroSection";
import RSVPForm from "./components/RSVPForm";
import Wishes from "./components/Wishes";
import "./App.css";

function App() {
  console.log('%c [ App ]-10', 'font-size:13px; background:pink; color:#bf2c9f;', 'App')
  return (
    <div className="App">
      <HeroSection />
      <CountdownTimer />
      <Gallery />
      <RSVPForm />
      <Wishes />
    </div>
  );
}

export default App;
