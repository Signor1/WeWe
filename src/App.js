import Home from "./components/Home/Home";
import Navbar from "./components/NavBar/Navbar";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div className="bg-slate-100 w-full h-auto">
      <Navbar />
      <Slider />
      <Home />
    </div>
  );
}

export default App;
