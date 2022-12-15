import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import { GameResultPage } from "./pages/GameResultPage";
import { Home } from "./pages/Home";
import { PlayPage } from "./pages/PlayPage";



function App() {


  return (
    <div className="max-w-[800px] w-full h-screen m-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playGame" element={<PlayPage />} />
          <Route path="/Result" element={<GameResultPage />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
