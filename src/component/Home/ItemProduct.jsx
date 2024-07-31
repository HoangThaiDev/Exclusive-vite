// Import Modules
import { useMemo } from "react";

// Import File CSS
import classes from "./css/itemProduct.module.css";
import "./css/ant-design/rating.css";

// Import Components
import { Rate } from "antd";

// Import Icons
import { HiOutlineHeart } from "react-icons/hi2";
import { LuEye } from "react-icons/lu";

export default function ItemProduct({ productDetail }) {
  // Create + use Hooks
  const priceDiscount = useMemo(() => {
    return (
      Number(productDetail.price) -
      (Number(productDetail.price) * productDetail.percent_discount) / 100
    ).toString();
  }, [productDetail]);

  return (
    <div className={classes["product-sale"]}>
      <div className={classes["product-sale-card"]}>
        <div className={classes["product-sale-card-header"]}>
          <img
            src={productDetail.image}
            alt={productDetail.image}
            loading="lazy"
          />

          <span className={classes["percent-discount"]}>
            {productDetail.percent_discount}%
          </span>
          <HiOutlineHeart
            className={`${classes["icon"]} ${classes["icon-heart"]}`}
          />
          <LuEye className={`${classes["icon"]} ${classes["icon-show"]}`} />
        </div>

        <div className={classes["product-sale-card-section"]}>
          <p className={classes["product-title"]}>{productDetail.name}</p>
          <div className={classes["product-price"]}>
            <p className={classes["product-price-current"]}>${priceDiscount}</p>
            <p className={classes["product-price-original"]}>
              ${productDetail.price}
            </p>
          </div>
          <div className={classes["product-rating"]}>
            <Rate
              className="product-icon"
              disabled
              defaultValue={productDetail.rate}
            />
            <span>({productDetail.sale_amount})</span>
          </div>
        </div>
      </div>
    </div>
  );
}
