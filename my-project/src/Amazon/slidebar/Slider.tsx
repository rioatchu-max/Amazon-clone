import "./slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Slider() {
  return (
    <>
    {/* Second Navigation Bar */}
      <div className="navi-bar-2">
        <div className="menu-bar">
          <FontAwesomeIcon icon={faBars} className="all-icon" />
          <p className="all">All</p>
        </div>
        <div className="fresh-section">
          <p>
            fresh<span className="arrow-fresh">&#9660;</span>
          </p>
        </div>
        <div className="player-section">
          <p className="player"> MX player </p>
        </div>
        <div className="sell-section">
          <p className="sell">Sell</p>
        </div>
        <div className="seller-section">
          <p className="seller">BestSeller</p>
        </div>
        <div className="deals-section">
          <p className="deals">Today's Deals</p>
        </div>
        <div className="mobiles-section">
          <p className="mobiles">Mobiles</p>
        </div>
        <div className="release-section">
          <p className="release">New Releases</p>
        </div>
        <div className="prime-section">
          <p className="prime">
            prime<span className="arrow-prime">&#9660;</span>
          </p>
        </div>
        <div className="customer-section">
          <p className="service">Customer Service</p>
        </div>
        <div className="electronics-section">
          <p className="electronic">Electronics</p>
        </div>
        <div className="fashion-section">
          <p className="fashion">Fashion</p>
        </div>
        <div className="kitchan-section">
          <p className="home-kitchan">Home & Kitchan</p>
        </div>
        <div className="festival-section">
          <img src="https://m.media-amazon.com/images/G/31/Events/img25/JUP25/Jupiter25_PC_SWM_Starts_tonight_2x._CB799242988_.jpg" />
        </div>
      </div>
    </>
  )
}

export default Slider