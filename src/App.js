import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import NavBar from './Pages/Home/NavBar/NavBar';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import NotFounded from './Pages/NotFounded/NotFounded';
import Register from './Pages/Register/Register';
import Checkout from './Pages/Checkout/Checkout';
import RequirAuth from './RequirAuth/RequirAuth';


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/service/:serviceId" element={<ServiceDetails></ServiceDetails>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/checkout" element={
          <RequirAuth>
            <Checkout></Checkout>
          </RequirAuth>
        } />
        <Route path="*" element={<NotFounded></NotFounded>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
