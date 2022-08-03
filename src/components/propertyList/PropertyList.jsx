import React from "react";
import "./propertyList.css";
import img4 from "../../assets/images/4.jpg";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src={img4} alt="" className="pListImage" />
        <div className="pListTitles">
          <h1>Hotel</h1>
          <h2>123 Hotel</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={img4} alt="" className="pListImage" />
        <div className="pListTitles">
          <h1>Hotel</h1>
          <h2>123 Hotel</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={img4} alt="" className="pListImage" />
        <div className="pListTitles">
          <h1>Hotel</h1>
          <h2>123 Hotel</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={img4} alt="" className="pListImage" />
        <div className="pListTitles">
          <h1>Hotel</h1>
          <h2>123 Hotel</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={img4} alt="" className="pListImage" />
        <div className="pListTitles">
          <h1>Hotel</h1>
          <h2>123 Hotel</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
