import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ParticlesPage from "./pages/Particles";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<ParticlesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
