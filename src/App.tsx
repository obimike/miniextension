import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StudetRecords from "./pages/Student_records";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<StudetRecords />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
