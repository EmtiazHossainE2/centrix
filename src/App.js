import Home from "./pages/home/Home";
import './App.css'
import { Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import ScrollBtn from "./components/Common/ScrollBtn/ScrollBtn";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ScrollBtn/>
    </main>
  );
}

export default App;
