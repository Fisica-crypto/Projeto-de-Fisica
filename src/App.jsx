import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Alcance from "./pages/Alcance";
import Altura from "./pages/Altura";
import Tempo from "./pages/tempo";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Tempo />} />
        <Route path="/Altura" element={<Altura />} />
        <Route path="/Alcance" element={<Alcance />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}
