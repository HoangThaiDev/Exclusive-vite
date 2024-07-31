// Import File CSS
import classes from "./css/introduce.module.css";

// Import Component
import { Row, Col } from "antd";
import { useState } from "react";

// Import Icons
import { IoIosArrowDown } from "react-icons/io";

export default function Introduce() {
  // Create + use Hooks
  const [isShowMenuDropdown, setIsShowMenuDropdown] = useState(false);

  // Create + use event handlers
  const showMenuDropdownHandler = () => {
    setIsShowMenuDropdown(!isShowMenuDropdown);
  };
  return (
    <div className={classes["introduce"]}>
      <div className={classes["introduce__container"]}>
        <Row className={classes["introduce__row"]}>
          <Col className={classes["introduce__col"]}>
            <p className={classes["col__title"]}>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <span>ShopNow</span>
            </p>
          </Col>
          <Col className={classes["introduce__col"]}>
            <div
              className={classes["col__languages"]}
              onClick={showMenuDropdownHandler}
            >
              <p>English</p>
              <IoIosArrowDown className={classes["languages__icon"]} />
            </div>
            {isShowMenuDropdown && (
              <div className={classes["menu-dropdown-languages"]}>
                <div className={classes["item-language"]}>
                  <img
                    width="16"
                    height="16"
                    src="https://img.icons8.com/emoji/48/united-kingdom-emoji.png"
                    alt="united-kingdom-emoji"
                  />
                  <p className={classes["menu-dropdown-language-english"]}>
                    English
                  </p>
                </div>
                <div className={classes["item-language"]}>
                  <img
                    width="16"
                    height="16"
                    src="https://img.icons8.com/emoji/48/vietnam-emoji.png"
                    alt="vietnam-emoji"
                  />
                  <p className={classes["menu-dropdown-language-vietnamese"]}>
                    Vietnamese
                  </p>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
}
