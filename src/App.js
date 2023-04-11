import './App.css';
import Bookings from './pages/Bookings';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Support from './pages/Support';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/myBooking" element={<Bookings/>}/>
        <Route path="/contactUs" element={<Support/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
