import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import HotelList from "./pages/list/HotelList";
import FeaturedHotel from "./pages/featured/FeaturedHotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/featured/:id" element={<FeaturedHotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
