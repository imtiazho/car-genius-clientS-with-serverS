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
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
import Ordered from './Pages/Ordered/Ordered';


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
        <Route path="/checkout/:serviceId" element={
          <RequirAuth>
            <Checkout></Checkout>
          </RequirAuth>
        } />
        <Route path="/addservice" element={
          <RequirAuth>
            <AddService></AddService>
          </RequirAuth>
        } />
        <Route path="/manageServices" element={
          <RequirAuth>
            <ManageServices></ManageServices>
          </RequirAuth>
        } />
        <Route path="/ordered" element={
          <RequirAuth>
            <Ordered></Ordered>
          </RequirAuth>
        } />
        <Route path="*" element={<NotFounded></NotFounded>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
