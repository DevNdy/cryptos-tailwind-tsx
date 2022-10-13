import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/navbar/NavBar";
import Cryptomonnaies from "./pages/Cryptomonnaies";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cryptomonnaies" element={<Cryptomonnaies />} />
      </Routes>
    </>
  );
}

export default App;
