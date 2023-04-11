import React, {useState} from 'react';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Bookings = () => {

  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>Date:
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
    </div>
)};

export default Bookings;