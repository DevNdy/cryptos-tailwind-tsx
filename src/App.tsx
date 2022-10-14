import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/navbar/NavBar";
import Cryptomonnaies from "./pages/Cryptomonnaies";
import MarketCap from "./pages/MarketCap";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/classement" element={<Cryptomonnaies />} />
        <Route path="/marketcap" element={<MarketCap />} />
      </Routes>
    </>
  );
}

export default App;
