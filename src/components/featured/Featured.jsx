import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          {/* <h1>Kolkata</h1>
          <h2>64 properties</h2> */}
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          {/* <h1>Mangalore</h1>
          <h2>83 properties</h2> */}
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          {/* <h1>Lucknow</h1>
          <h2>32 properties</h2> */}
        </div>
      </div>
    </div>
  );
};

export default Featured;
