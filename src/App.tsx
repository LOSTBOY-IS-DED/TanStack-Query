import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import OldWay from "./components/OldWay";
import Tanstack from "./components/Tanstack";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <div className="h-screen w-screen bg-black">
       <div className="p-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oldWay" element={<OldWay />} />
          <Route path="/tanstack" element={<Tanstack />} />
        </Routes>
      </div>
    </div>
     
    </BrowserRouter>
  );
}

export default App;
