// Import File CSS
import classes from "./css/navigation.module.css";

// Import Component
import { Row, Col } from "antd";
import { NavLink } from "react-router-dom";

// Import Icons
import iconSearch from "../assets/icon/icon-search.svg";
import iconCart from "../assets/icon/icon-cart.svg";
import iconHeart from "../assets/icon/icon-heart.svg";

export default function Navigation() {
  return (
    <div className={classes["navigation"]}>
      <div className={classes["navigation__container"]}>
        <Row className={classes["navigation__row"]}>
          <Col className={classes["navigation__col"]}>
            <h1>Exclusive</h1>
          </Col>
          <Col className={classes["navigation__col"]}>
            <ul className={classes["navigation__list-link"]}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${classes["navigation__item-link"]} ${classes["navigation__item-link-active"]}`
                    : classes["navigation__item-link"]
                }
              >
                <p>Home</p>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? `${classes["navigation__item-link"]} ${classes["navigation__item-link-active"]}`
                    : classes["navigation__item-link"]
                }
              >
                <p>Contact</p>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? `${classes["navigation__item-link"]} ${classes["navigation__item-link-active"]}`
                    : classes["navigation__item-link"]
                }
              >
                <p>About</p>
              </NavLink>
              <NavLink
                to="sign-up"
                className={({ isActive }) =>
                  isActive
                    ? `${classes["navigation__item-link"]} ${classes["navigation__item-link-active"]}`
                    : classes["navigation__item-link"]
                }
              >
                <p>Sign Up</p>
              </NavLink>
            </ul>
          </Col>
          <Col className={classes["navigation__col"]}>
            <div className={classes["navigation__user"]}>
              <div className={classes["user-form"]}>
                <input
                  type="text"
                  className={classes["form-input"]}
                  placeholder="What are you looking for?"
                />
                <img
                  className={classes["icon-input-search"]}
                  src={iconSearch}
                  alt={iconSearch}
                  loading="lazy"
                />
              </div>
              <img
                className={classes["icon-input-heart"]}
                src={iconHeart}
                alt={iconHeart}
                loading="lazy"
              />
              <img
                className={classes["icon-input-cart"]}
                src={iconCart}
                alt={iconCart}
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
