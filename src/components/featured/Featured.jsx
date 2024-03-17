import { useNavigate } from "react-router-dom";
import "./featured.css";

const Featured = () => {
  const navigate = useNavigate();

  const onFeaturedClick = (e) => {
    navigate(`/featured/${e.target.id}`);
  };

  return (
    <div className="featured">
      <div className="featuredItem" onClick={onFeaturedClick}>
        <img
          id="1"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/a2/4e/0e/hotel-facade.jpg?w=900&h=-1&s=1"
          alt=""
          className="featuredImg"
        />
        {/* <div className="featuredTitles">
          <h1>Kolkata</h1>
          <h2>64 properties</h2>
        </div> */}
      </div>

      <div className="featuredItem" onClick={onFeaturedClick}>
        <img
          id="2"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/6e/f8/d0/hotel-lobby.jpg?w=1800&h=-1&s=1"
          alt=""
          className="featuredImg"
        />
        {/* <div className="featuredTitles">
          <h1>Chennai</h1>
          <h2>83 properties</h2>
        </div> */}
      </div>
      <div className="featuredItem" onClick={onFeaturedClick}>
        <img
          id="3"
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/235376735.jpg?k=6a88854cb0234a766f5de50865ff7f1b2b624dcab894b541c7218cd8771793bd&o=&hp=1"
          alt=""
          className="featuredImg"
        />
        {/* <div className="featuredTitles">
          <h1>Amsterdam</h1>
          <h2>32 properties</h2>
        </div> */}
      </div>
    </div>
  );
};

export default Featured;
