import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import State from "./context/State";

function App() {
  return (
    <State>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route Component={Home} path="/" />
          <Route Component={Services} path="/services" />
          <Route Component={About} path="/about" />
        </Routes>
      </BrowserRouter>

      {/* <Home/>
<Services/>
<About/> */}
    </State>
  );
}

export default App;
