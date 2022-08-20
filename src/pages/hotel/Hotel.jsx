import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./hotel.css";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";
import img6 from "../../assets/images/6.jpg";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";

const Hotel = () => {
  const location = useLocation();

  const id = location.pathname.split("/")[2]; // ambil data id nya dari client untuk request ke api

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  // setelah dapat id, baru request ke server untuk minta data berdasarkan id nya
  const { data, loading, error } = useFetch(`/hotels/find/${id}`);

  /* const photos = [
    {
      src: img1,
    },
    {
      src: img2,
    },
    {
      src: img3,
    },
    {
      src: img4,
    },
    {
      src: img5,
    },
    {
      src: img6,
    },
  ]; */

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (e) => {
    let newSlide;

    if (e === "-") {
      newSlide = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlide = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlide);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading Hotel"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("-")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("+")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location - {data.distance}m from center
            </span>
            <span className="hotelPriceHighLight">
              Book a stay over Rp {data.cheapestPrice} at this peroperty and get
              a free airport taxi
            </span>
            <div className="hotelImg">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper">
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hotelImage"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 7-nights stay!</h1>
                <span>
                  Located in the real heart of Bandung, this property has an
                  excellent location score of 9.8
                </span>
                <h2>
                  <b>Rp 1.425.000</b> (7 nights)
                </h2>
                <button>Reserve or Book now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Hotel;