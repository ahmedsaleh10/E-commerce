import styles from "./style.module.css";
import { styled } from "@mui/material/styles";
import React from "react";
import Rating from "@mui/material/Rating";

const ProductRating = ({ ratingValue, RatingTimes }) => {
  return (
    <div className={styles.flex}>
      {ratingValue && (
        <Rating
          name="customized-color"
          value={ratingValue}
          getLabelText={(ratingValue) =>
            `${ratingValue} Heart${ratingValue !== 1 ? "s" : ""}`
          }
          precision={0.5}
          icon={<img src="/images/star.png" alt="set star rating" />}
          emptyIcon={<img src="/images/star-empty.png" alt="empty star" />}
        />
      )}
      {RatingTimes && (
        <span className={styles.ratingCount}>{`(${RatingTimes})`}</span>
      )}
    </div>
  );
};

export default ProductRating;
