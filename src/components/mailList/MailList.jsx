import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money</h1>
      <span className="mailDesc">
        Sign Up and we'll send tge best deals for you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subcribe</button>
      </div>
    </div>
  );
};

export default MailList;
