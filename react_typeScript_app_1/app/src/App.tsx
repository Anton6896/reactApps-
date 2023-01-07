import "./App.css";
import { Routes, Route } from "react-router-dom";

import Container from "@mui/material/Container";

import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { Home } from "./pages/Home";
import { AppNavbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <Container>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
