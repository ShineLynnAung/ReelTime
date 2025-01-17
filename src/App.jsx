import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Series from "./pages/series";
function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/series" element={<Series />} />
        </Routes>
    </div>
  );
}

export default App;
