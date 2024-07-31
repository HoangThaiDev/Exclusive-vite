// Import Modules

// Import File CSS
import classes from "./css/header.module.css";
import "./css/ant-design/sidebarMenuHeader.css";
import "./css/ant-design/slickHeader.css";

// Import Components
import { Row, Col, Collapse, Menu } from "antd";
import Slider from "react-slick";
import { Link } from "react-router-dom";

// Import Icons
import { IoIosArrowForward } from "react-icons/io";
import { LuArrowRight } from "react-icons/lu";

// Import images
import banner from "../../assets/banner-header/slick-header1.png";
import logo from "../../assets/banner-header/logo-apple.png";

function CustomSlide(props) {
  const { ...otherProps } = props;

  return (
    <div {...otherProps} className="slick-container">
      <div className="slick-card">
        <div className="slick-card-logo">
          <img
            className="slick-card-logo-img"
            src={logo}
            alt={logo}
            loading="lazy"
          />
          <p className="slick-card-logo-title">iPhone 14 Series</p>
          <h1 className="slick-card-content">Up to 10% off Voucher</h1>
          <div className="slick-card-footer">
            <Link to="shop" className="slick-card-link">
              Shop Now
            </Link>
            <LuArrowRight className="slick-card-link-icon" />
          </div>
        </div>
        <img
          className="slick-banner"
          src={banner}
          alt={banner}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function Header() {
  //  Create + use item Menu Header
  const items = [
    {
      key: "sub1",
      label: "Woman's Fashion",
      children: [
        {
          key: "g1",
          label: "Item 1",
        },
      ],
    },
    {
      key: "sub2",
      label: "Men's Fashion",
      children: [
        {
          key: "g2",
          label: "Item 1",
        },
      ],
    },
    {
      key: "sub3",
      label: "Electronics",
    },
    {
      key: "sub4",
      label: "Home & Lifestyle",
    },
    {
      key: "sub5",
      label: "Medicine",
    },
    {
      key: "sub6",
      label: "Sports & Outdoor",
    },
    {
      key: "sub7",
      label: "Baby's & Toys",
    },
    {
      key: "sub8",
      label: "Groceries & Pets",
    },
    {
      key: "sub9",
      label: "Health & Beauty",
    },
  ];

  // Create + use options Slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Create + use event handlers

  return (
    <div className={classes["header"]}>
      <div className={classes["header__container"]}>
        <Row className={classes["header__row"]}>
          <Col className={classes["header__col"]}>
            <Menu
              // onClick={onClick}
              className="header__col-sidebar-menu"
              mode="inline"
              items={items}
            />
          </Col>
          <Col className={classes["header__col"]}>
            <Slider {...settings} className="slick-header">
              <CustomSlide index={1} />
              <CustomSlide index={1} />
              <CustomSlide index={1} />
              <CustomSlide index={1} />
              <CustomSlide index={1} />
            </Slider>
          </Col>
        </Row>
      </div>
    </div>
  );
}
