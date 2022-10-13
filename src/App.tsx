import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/navbar/NavBar";
import Cryptomonnaies from "./pages/Cryptomonnaies";
import Analyses from "./pages/Analyses";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/classement" element={<Cryptomonnaies />} />
        <Route path="/analyses" element={<Analyses />} />
      </Routes>
    </>
  );
}

export default App;
