import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Learn from "./pages/Learn";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Create from "./pages/Create";
import Cleanup from "./pages/Cleanup";
import Workshop from "./pages/Work_register";
import Cleanup_register from "./pages/Cleanup_register";
import Competitionpage from "./pages/Competitionpage";
import Register from "./pages/Competition_register";
import ExtraBin from "./pages/ExtraBin";
function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Learn" element={<Learn />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Cleanup" element={<Cleanup />} />
        <Route path="/Cleanup_register" element={<Cleanup_register />} />
        <Route path="/Competitionpage" element={<Competitionpage />} />
        <Route path="/Competition_register" element={<Register />} />
        <Route path="/ExtraBin" element={<ExtraBin />} />
        <Route path="/Work_register" element={<Workshop/>} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
