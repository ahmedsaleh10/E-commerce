import React from "react";
import styles from "./style.module.css";

const ProductPrice = ({ price, oldPrice}) => {
  return (
    <div className={styles.flex}>
      {price && <span className={styles.price}>${price}</span>}
      {oldPrice && (
        <span className={styles.oldPrice}>
          {" "}
          <del>${oldPrice}</del>
        </span>
      )}
      
    </div>
  );
};

export default ProductPrice;
