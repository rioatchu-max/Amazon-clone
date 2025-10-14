import  { useState } from "react";
import "./carosal.css";
import { useEffect } from "react";

const images = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/LEO/Jupiterphase1/RewardsPC_2X_-_3000x1200._CB799265737_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2025/Event/Jupiter25/UnrecRev/30013._CB800955746_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/Jupiter25/GW/Event/RV2/WBLB3000x1200._CB799223953_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Jupiter/hero/desktops/UNREC/PC_3000X1200_Unrec_LIVE_ASIN_PCAcc._CB799215974_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2025/Jupiter25/GW/ME/UR/D298880126_IN_WLA_Jupiter_Hero_Banners_Unrec_PC_PB_LIVE_ASIN_3000x1200._CB800959465_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/Img25/Consumables/HPC/Jupiter/Phase1/GW/Revised/Revised_Unrec_PC_Hero_3000x1200._CB799263776_.png",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/Jupiter25/2XChildrens._CB801096476_.jpg"
];

function Carosal() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const showImage = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 400); // match transition duration in CSS
  };

  const prevImage = () => {
    showImage(current === 0 ? images.length - 1 : current - 1);
  };

  const nextImage = () => {
    showImage(current === images.length - 1 ? 0 : current + 1);
  };
  useEffect(() => {
  const interval = setInterval(() => {
    nextImage();
  }, 5000); // 5 seconds per slide
  return () => clearInterval(interval);
}, [current]);

  return (
    <div className="carosal-img">
      <span className="carosal-arrow-lft" onClick={prevImage}>&lt;</span>
      <img
        src={images[current]}
        alt="carousel"
        className={fade ? "fade-in" : "fade-out"}
      />
      <span className="arrow-right" onClick={nextImage}>&gt;</span>
    </div>
  );
}
export default Carosal;