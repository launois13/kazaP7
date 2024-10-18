import About from "../pages/About";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Location from "../pages/Location";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Accueil" element={<Home />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="/Apropos" element={<About />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;