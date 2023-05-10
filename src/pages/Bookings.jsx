import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Bookings = () => {

  const [data, setData] = useState(null);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    Axios.get("http://localhost:3001/myBooking").then((resp) => {
      if(resp.data) {
        setData(resp.data);
        console.log(resp.data);
      }else{
        console.log("Hey! Stop sending empty data");
      }
      // console.info(resp.data);
    });
  }, []);

  // const hotels = data;

  return (
    <div>Date:
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
      <div>
          {data?.map((hotel) => 
            <p key={hotel.Hotel_ID}>{hotel.Hotel_Name} {hotel.Contact_No}</p>
          )}
        </div>
    </div>
)};

export default Bookings;