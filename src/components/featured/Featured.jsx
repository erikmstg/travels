import React from "react";
import "./featured.css";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=jakarta,tangerang,bekasi"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading running"
      ) : (
        <>
          <div className="featuredItem">
            <img src={img1} alt="view 1" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Jakarta</h1>
              <h3>{data[0]}</h3>
            </div>
          </div>
          <div className="featuredItem">
            <img src={img2} alt="view 2" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Tangerang</h1>
              <h3>{data[1]}</h3>
            </div>
          </div>
          <div className="featuredItem">
            <img src={img3} alt="view 3" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Bekasi</h1>
              <h3>{data[2]}</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
