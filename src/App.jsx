import "./App.css";
import GenereMoviesList from "./components/GenereMoviesList";
import Header from "./components/Header";
import Productons from "./components/Productons";
import Slider from "./components/Slider";

function App() {
  return (
    <div>
        <Header />
        <Slider />
        <Productons />
        <GenereMoviesList />
    </div>
  );
}

export default App;
