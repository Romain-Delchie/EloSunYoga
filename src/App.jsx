import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConstructionPage from "./Page/ConstructionPage/ConstructionPage";
import "./App.css";
import Home from "./Page/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConstructionPage />} />
        <Route path="/test" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
