// Import File CSS
import classes from "./css/productFlashSale.module.css";
import "./css/ant-design/slickProductFlashSale.css";

// Import Components
import ItemProduct from "./ItemProduct";
import CountDownTimer from "./CountdownTimer";
import Slider from "react-slick";

// Import Icons
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect } from "react";

// Custom Slide + Arrow Slider
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaArrowRight className="icon-next-arrow" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaArrowLeft className="icon-prev-arrow" />
    </div>
  );
}

function CustomSlide(props) {
  const { index, product, ...otherProps } = props;

  return (
    <div {...otherProps} className="product-item">
      <ItemProduct productDetail={product} />
    </div>
  );
}
export default function ProductFlashSale({ products }) {
  // Create fake datetime
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const targetDate = NOW_IN_MS + THREE_DAYS_IN_MS;

  // Create + use setting Slider
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // side effect

  return (
    <div className={classes["product-flash-sale"]}>
      <div className={classes["product-flash-sale-container"]}>
        <div className={classes["product-flash-sale-header"]}>
          <div className={classes["product-flash-sale-header-note"]}>
            <span className={classes["header-note-bg"]}></span>
            <span className={classes["header-note-title"]}>Today&apos;s</span>
          </div>

          <div className={classes["product-flash-sale-header-time"]}>
            <h2 className={classes["header-time-title"]}>Flash Sales</h2>
            <CountDownTimer targetDate={targetDate} />
          </div>
        </div>
      </div>
      <div className={classes["product-flash-sale-list"]}>
        <div className={classes["slider-container"]}>
          <Slider {...settings} className="product-flash-sale-slider">
            {products.map((product) => (
              <CustomSlide key={product.id} index={1} product={product} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
