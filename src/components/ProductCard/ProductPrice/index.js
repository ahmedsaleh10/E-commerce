import React from "react";
import styles from "./style.module.css";
import ProductRaing from "../ProductRating";

const ProductPrice = (props) => {
  const { price, oldPrice, options ,ratingValue,RatingTimes} = props;
  return (
    <div className={styles.flex}>
      {price && <span className={styles.price}>${price}</span>}
      {oldPrice && (
        <span className={styles.oldPrice}>
          {" "}
          <del>${oldPrice}</del>
        </span>
      )}
      {options && (
        <ProductRaing ratingValue={ratingValue} RatingTimes={RatingTimes} />
      )}
    </div>
  );
};

export default ProductPrice;
