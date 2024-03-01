import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import axios from "axios";
import { useEffect } from "react";
// chicago dest_id = 20033173
// mumbai dest_id = -2092174

const HotelList = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [data, setData] = useState(location.state.data);
  const [isLoading, setIsLoading] = useState(false);
  const [hotelData, setHotelData] = useState();

  const startDateFormat = format(date[0].startDate, "yyyy-MM-dd");
  const endDateFormat = format(date[0].endDate, "yyyy-MM-dd");

  const getPropertyList = {
    method: "GET",
    url: "https://apidojo-booking-v1.p.rapidapi.com/properties/list",
    params: {
      offset: "0",
      arrival_date: startDateFormat, // yyyy-MM-dd format required
      departure_date: endDateFormat, // yyyy-MM-dd format required
      guest_qty: options.adult,
      dest_ids: data[0].dest_id,
      room_qty: options.room,
      search_type: "city",
      children_qty: options.children,
      children_age: "5,7",
      search_id: "none",
      price_filter_currencycode: "INR",
      order_by: "popularity",
      languagecode: "en-us",
      travel_purpose: "leisure",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
    },
  };

  useEffect(() => {
    const fetchHotels = async () => {
      setIsLoading(true);
      const result = await axios.request(getPropertyList);
      const hotelList = await result.data;
      setHotelData(hotelList);
      setIsLoading(false);
    };

    fetchHotels();
  }, []);

  // console.log("Data =>", hotelData);
  const hotelList = hotelData?.result;

  return (
    <div>
      <Navbar />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            hotelList?.map((hotel, index) => {
              return (
                <div
                  className="listResult"
                  key={index}
                  // onClick={handleSingleHotel(hotel)}
                >
                  <SearchItem hotel={hotel} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelList;
