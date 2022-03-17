import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MapPage from "./components/map";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
