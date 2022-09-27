import React from "react";
import "./propertyList.css";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="pList">
      {loading ? (
        "Loading running"
      ) : (
        <>
          {/* jika terdapat data & images.map, dan render tiap image dengan img */}
          {data &&
            images.map((img, i) => (
              // if use map, don't forget to use unit 'key'
              <div className="pListItem" key={i}>
                <img src={img} alt="" className="pListImage" />
                <div className="pListTitles">
                  {/* to makesure this data is not empty, use '?' */}
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
