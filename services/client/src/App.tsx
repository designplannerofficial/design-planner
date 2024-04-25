import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./page/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./page/Login";
import Signup from "./page/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
