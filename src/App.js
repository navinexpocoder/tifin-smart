// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/style.css'
import './scss/bootstrap.scss';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/services" element={<Services/>}></Route>
      <Route exact path="/menu" element={<Menu/>}></Route>
      <Route exact path="/contect" element={<Contact/>}></Route>
      <Route exact path="/testimonial" element={<Testimonial/>}></Route>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
