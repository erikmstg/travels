import React from "react";
import "./featured.css";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={img1} alt="view 1" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Hotels</h1>
          <h3>Swim Pool</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img src={img2} alt="view 2" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Hotels</h1>
          <h3>Swim Pool</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img src={img3} alt="view 3" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Hotels</h1>
          <h3>Swim Pool</h3>
        </div>
      </div>
    </div>
  );
};

export default Featured;
