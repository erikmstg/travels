import React from "react";
import "./searchItem.css";
import img6 from "../../assets/images/6.jpg";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={img6} alt="" className="si-Img" />
      <div className="si-Desc">
        <h1 className="si-Title">{item.name}</h1>
        <span className="si-Distance">{item.distance}</span>
        <span className="si-TaxiOp">Free Airport Taxi</span>
        <span className="si-Subtitle">Studio villa with Air conditioning</span>
        <span className="si-Features">{item.desc}</span>
        <span className="si-CancelOp">Free Cancellation</span>
        <span className="si-CancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="si-Details">
        {item.rating && (
          <div className="si-Rating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="si-DetailText">
          <span className="si-Price">Rp {item.cheapestPrice}</span>
          <span className="si-Tax">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="si-Check-Btn">See Availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
