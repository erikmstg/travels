import React from "react";
import "./searchItem.css";
import img6 from "../../assets/images/6.jpg";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src={img6} alt="" className="si-Img" />
      <div className="si-Desc">
        <h1 className="si-Title">Danau oke oke</h1>
        <span className="si-Distance">100m from center</span>
        <span className="si-TaxiOp">Free Airport Taxi</span>
        <span className="si-Subtitle">Studio villa with Air conditioning</span>
        <span className="si-Features">
          Entire Stuido - 1 Bathroom - 21m 1 full bed
        </span>
        <span className="si-CancelOp">Free Cancellation</span>
        <span className="si-CancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="si-Details">
        <div className="si-Rating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="si-DetailText">
          <span className="si-Price">123</span>
          <span className="si-Tax">Includes taxes and fees</span>
          <button className="si-Check-Btn">See Availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
