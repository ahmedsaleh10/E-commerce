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
import Options from "./Options";

const ProductCard = (props) => {


  // <ProductCard 
  //       salePercentage={0}
  //       isNew={true}
  //       price={120}
  //       oldPrice={122}
  //       ratingValue="5"
  //       RatingTimes="88"
  //       />

  const {isNew,salePercentage,price,oldPrice,ratingValue,RatingTimes, options}=props
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
          <ProductPrice price={price} oldPrice={oldPrice} options={options} ratingValue={ratingValue} RatingTimes={RatingTimes}/>
          { !options &&   <ProductRaing ratingValue={ratingValue} RatingTimes={RatingTimes} />}

          { options &&    <Options/>}
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
