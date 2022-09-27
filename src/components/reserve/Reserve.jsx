import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import "./reserve.css";

// fetch our room in this page
const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRoom, setSelectedRoom] = useState([]);
  const { data } = useFetch(`/hotels/room/${hotelId}`);
  const { dates } = useContext(SearchContext);

  const navigate = useNavigate();

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    let dates = [];

    // create loop
    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };
  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailables = (roomNumber) => {
    // some method is gonna check whether it includes some of them or not
    // and check allDates, if it includes any of our dates inside db, were going to set a flag here
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
    // if it includes its gonna be TRUE, but if its TRUE it means not available
    return !isFound;
  };

  const handleSelect = (e) => {
    // check condition, if that selected or not
    const checked = e.target.checked;
    const value = e.target.value;

    // if its checked, take the previous rooms, and add 1 more id
    // if its not checked, filter our previous rooms, adn pull a room id from selected rooms,
    setSelectedRoom(
      checked
        ? [...selectedRoom, value]
        : // if them doest equal our value/roomId, they gonna stay. but if equal were gonna move out this value
          selectedRoom.filter((item) => item !== value)
    );
  };
  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRoom.map((roomId) => {
          // dates: it takes all dates between start and end date
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: allDates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="reserve">
      <div className="reserveContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="reserveClose"
          onClick={() => setOpen(false)} // to close this modal
        />
        <span>Select your room:</span>
        {data.map((item, i) => (
          <div className="reserveItem" key={i}>
            <div className="reserveItemInfo">
              <div className="reserveItemTitle">Title: {item.title}</div>
              <div className="reserveItemDesc">Desc: {item.desc}</div>
              <div className="reserveItemMax">
                Max people : <b>{item.maxPeople}</b>
              </div>
              <div className="reserveItemPrice">Price: {item.price}</div>
            </div>
            <div className="reserveSelectedRoom">
              {item.roomNumbers.map((roomNumber, numb) => (
                <div className="room" key={numb}>
                  <label htmlFor="">{roomNumber.number}</label>
                  {/* when we select them, we gonna change selected room */}
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailables(roomNumber)} // disabled, if its not available
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="reserveBtn">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
