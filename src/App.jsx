import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import MainPage from "./pages/MainPage";
import ParticlesPage from "./pages/Particles";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<ParticlesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
