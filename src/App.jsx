import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConstructionPage from "./Page/ConstructionPage/ConstructionPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConstructionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
