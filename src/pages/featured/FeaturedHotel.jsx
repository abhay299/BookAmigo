import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./featuredHotel.css";

const FeaturedHotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState("");
  const { id } = useParams();

  const key = process.env.REACT_APP_MOCKAPI_KEY;

  let api = `https://${key}.mockapi.io/api/featured/hotel`;
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(api);
      setData(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [api]);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
  console.log("Data =>", data[id - 1]?.photos);

  return (
    <div>
      <Navbar />
      {isLoading ? (
        <span style={{ marginLeft: "30px", fontWeight: "bold" }}>
          Loading...
        </span>
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data[id - 1]?.photos[slideNumber].src}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <h1 className="hotelTitle">{data[id - 1]?.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data[id - 1]?.address}</span>
            </div>
            <span className="hotelDistance">
              {data[id - 1]?.distance}km away from airport
            </span>
            <div className="hotelImages">
              {data[id - 1]?.photos.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo.src}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">Stay in the heart of City</h1>
                <p className="hotelDesc">
                  {data[id - 1]?.name} has accommodations with air conditioning,
                  a public gym, and free WiFi. The units come with hardwood
                  floors and feature a fully equipped kitchenette with a
                  microwave, a flat-screen TV, and a private bathroom with
                  shower and a hairdryer. A fridge is also offered, as well as
                  an electric tea pot and a coffee machine. The nearest airport
                  is {data[id - 1]?.distance} km from {data[id - 1]?.name}, and
                  the property offers a paid airport shuttle service.
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 5-night stay!</h1>
                <span>
                  Located in the real heart of , this property has an excellent
                  location score of {data[id - 1]?.rating}!
                </span>
                <h2>
                  {/* <b>{currency}</b> */}
                  <b>Price {data[id - 1]?.price} INR</b>
                </h2>
                <button>Book Now!</button>
              </div>
            </div>
            {/* <div id="section" ref={scrollToReview}>
            {isLoading ? (
              <div>Loading...</div>
            ) : reviews ? (
              <div className="reviewContainer">
                <h2>Guest Reviews</h2>
                {reviews.vpm_featured_reviews.map((review) => {
                  return (
                    <div className="commentContainer" key={review.hotel_id}>
                      <div className="userDetail">
                        <img
                          src={review.author.avatar}
                          alt="avatar"
                          width="50px"
                          height="50px"
                          style={{ borderRadius: "50%", padding: "0px 30px" }}
                        />
                        <h2>{review.author.name}</h2>
                        <span style={{ display: "none" }}>
                          {([date, time] = review.date.split(" "))}
                        </span>
                        <span>Date: {date}</span>
                        <span>Time: {time}</span>
                      </div>
                      <p className="userComment">{review.pros}</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <button className="loadReview" onClick={handleReviews}>
                Show Reviews
              </button>
            )}
          </div> */}
          </div>
          <MailList />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default FeaturedHotel;
