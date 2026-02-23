import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/main/MainPage";

function AppRouter() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
