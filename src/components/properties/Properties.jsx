import React from "react";
import "./properties.css";
import img5 from "../../assets/images/5.jpg";
import useFetch from "../../hooks/useFetch";

const Properties = () => {
  const { data, loading, error } = useFetch("/hotels");

  return (
    <div className="fp">
      <div className="fpItem">
        <img src={img5} alt="" className="fpImg" />
        <span className="fpName">HomeVillage at Mountain</span>
        <span className="fpCity">Bandung, Indonesia</span>
        <span className="fpPrice">Starting from Rp 750K</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={img5} alt="" className="fpImg" />
        <span className="fpName">HomeVillage at Mountain</span>
        <span className="fpCity">Bandung, Indonesia</span>
        <span className="fpPrice">Starting from Rp 750K</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={img5} alt="" className="fpImg" />
        <span className="fpName">HomeVillage at Mountain</span>
        <span className="fpCity">Bandung, Indonesia</span>
        <span className="fpPrice">Starting from Rp 750K</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={img5} alt="" className="fpImg" />
        <span className="fpName">HomeVillage at Mountain</span>
        <span className="fpCity">Bandung, Indonesia</span>
        <span className="fpPrice">Starting from Rp 750K</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default Properties;
