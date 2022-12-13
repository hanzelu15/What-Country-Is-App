import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import { Home } from "./pages/Home";



function App() {


  return (
    <div className="max-w-[800px] min-w-[375px] w-full h-screen m-auto">
            <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
