import styles from "./style.module.css";
import { styled } from "@mui/material/styles";

import React from "react";
import Rating from "@mui/material/Rating";

const ProductRaing = (props) => {
  const { ratingValue, RatingTimes } = props;

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });
  return (
    <div className={styles.flex}>
      {/* <Rating name="read-only" value={ratingValue} readOnly precision={0.5} />{" "} */}

      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
        precision={0.5}
        icon={<img src="./images/star.png" alt="set star rating"/>}
        emptyIcon={<img src="./images/star-empty.png" alt="empty star" />}
      />
      <span className={styles.ratingCount}>{`(${RatingTimes})`}</span>
    </div>
  );
};

export default ProductRaing;
