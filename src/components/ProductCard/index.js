import styles from "./style.module.css";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import ProductPrice from "./ProductPrice";
import ProductName from "./ProductName";
import ProductRating from "./ProductRating";
import Badge from "./Badge";
import CardAction from "./CardAction";
import Options from "./Options";

const ProductCard = ({product,options,oldPrice,isNew,salePercentage}) => {
  return (
    <>
      <Card variant="outlined" sx={{ width: 270 }}>
        <Box className={styles.background}>
          <Badge
            className={styles.saleBadge}
            isNew={isNew}
            salePercentage={salePercentage}
          />
          <CardAction />
          <img
            className={styles.productImage}
            src={product.image}
            alt="product"
          />
        </Box>
        
        <CardContent>
          <ProductName name={product.title} />
          <ProductPrice price={product.price} oldPrice={oldPrice} options={options} />
          <ProductRating ratingValue={product.rating.rate} RatingTimes={product.rating.count} />
          { options &&    <Options/>}
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
