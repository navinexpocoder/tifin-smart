// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/style.css";
import "./scss/bootstrap.scss";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Dashboard from "./Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateLayout from "./Dashboard/PrivateLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/testimonial" element={<Testimonial />}></Route>
          <Route path="/private" element={<PrivateLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
