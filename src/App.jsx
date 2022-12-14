import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import { Home } from "./pages/Home";
import { PlayPage } from "./pages/PlayPage";



function App() {


  return (
    <div className="max-w-[800px] w-full h-screen m-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playGame" element={<PlayPage />} />

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
