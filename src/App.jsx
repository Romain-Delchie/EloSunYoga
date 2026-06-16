import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConstructionPage from "./Page/ConstructionPage/ConstructionPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="container"></div>} />
        <Route path="/brouillon" element={<ConstructionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
