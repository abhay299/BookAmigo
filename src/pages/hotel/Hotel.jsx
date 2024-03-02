import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./hotel.css";

const Hotel = () => {
  const location = useLocation();
  const [slideNumber, setSlideNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [reviews, setReviews] = useState("");

  const data = location.state.s;

  const scrollToReview = useRef();

  const onClickReachReview = () => {
    scrollToReview.current?.scrollIntoView();
  };

  const photos = [
    {
      src: `${data?.main_photo_url}`,
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

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

  const currency = new Intl.NumberFormat(
    `${data.default_language}-${data.countrycode.toUpperCase()}`,
    {
      style: "currency",
      currency: data.currency_code,
    }
  ).format(data.min_total_price);

  const getReviews = {
    method: "GET",
    url: "https://apidojo-booking-v1.p.rapidapi.com/properties/get-featured-reviews",
    params: {
      hotel_id: data.hotel_id,
      languagecode: "en-us",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
    },
  };

  const handleReviews = async () => {
    try {
      setIsLoading(true);
      const reviewRes = await axios.request(getReviews);
      const res = await reviewRes.data;
      setReviews(res);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  let date, time;

  return (
    <div>
      <Navbar />
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
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow" onClick={onClickReachReview}>
            Check Reviews!
          </button>
          <h1 className="hotelTitle">{data?.hotel_name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data?.address}</span>
          </div>
          <span className="hotelDistance">
            {data?.review_score_word} - {data?.distance}km away from airport
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
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
                Located a 5-minute walk from St. Florian's Gate in Krakow,{" "}
                {data.hotel_name} has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice,{" "}
                {data.distance} km from {data.hotel_name}, and the property
                offers a paid airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 4-night stay!</h1>
              <span>
                Located in the real heart of {data.city_trans}, this property
                has an excellent location score of {data?.review_score}!
              </span>
              <h2>
                <b>{currency}</b>
              </h2>
              <button>Book Now!</button>
            </div>
          </div>
          <div id="section" ref={scrollToReview}>
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
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
