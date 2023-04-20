import styles from "./style.module.css";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

import ProductPrice from "./ProductPrice";
import ProductName from "./ProductName";
import ProductRaing from "./ProductRating";
import Badge from "./Badge";
import CardAction from "./CardAction";

const ProductCard = (props) => {

  const {isNew , salePercentage ,price,oldPrice,ratingValue,RatingTimes}=props
  return (
    <>
      <Card variant="outlined" sx={{ maxWidth: 270 }}>
        <Box className={styles.background}>
          <Badge
            className={styles.saleBadge}
            isNew={isNew}
            salePercentage={salePercentage}
          />
          <CardAction />
          <img
            className={styles.productImage}
            src="./images/item.png"
            alt="product"
          />
        </Box>

        <CardContent>
          <ProductName />
          <ProductPrice price={price} oldPrice={oldPrice} />
          <ProductRaing ratingValue={ratingValue} RatingTimes={RatingTimes} />
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
