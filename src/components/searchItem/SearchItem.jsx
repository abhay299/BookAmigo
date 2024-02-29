import "./searchItem.css";

const SearchItem = ({ hotel }) => {
  // console.log("HOTEL =>", hotel);

  const currency = new Intl.NumberFormat(
    `${hotel.default_language}-${hotel.countrycode.toUpperCase()}`,
    {
      style: "currency",
      currency: hotel.currency_code,
    }
  ).format(hotel.min_total_price);

  return (
    <div className="searchItem">
      <img src={hotel.main_photo_url} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{hotel.hotel_name}</h1>
        <span className="siDistance">{hotel.distance}km from airport</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">{hotel.address}</span>
        <span className="siFeatures">
          Entire room • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>{hotel.review_score_word}</span>
          <button>{hotel.review_score}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{currency}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
