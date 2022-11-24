import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/app.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, About, Projects, Contact } from "./components/index";
import Navbar from "./components/Navbar"; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </>
  );
}

export default App;
