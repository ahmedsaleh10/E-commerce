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
import { Button } from "@mui/material";
import { useState } from "react";
const ProductCard = ({ product, options, oldPrice, isNew, salePercentage }) => {
  const [style, setStyle] = useState({ display: "none" });

  return (
    <>
      <Card
        onMouseOver={(e) => {
          setStyle({ display: "block" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}
        variant="outlined"
        sx={{ width: 270 }}
      >
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
          <Button
            style={style}
            sx={{
              "&:hover": { color: "white", backgroundColor: "black" },
              position: "absolute",
              bottom: "0px",
              fontFamily: "Poppins",
              backgroundColor: "black",
              color: "white",
              width: "100%",
            }}
            children={"Add To Cart"}
          />
        </Box>

        <CardContent>
          <ProductName name={product.title} />
          <ProductPrice
            price={product.price}
            oldPrice={oldPrice}
            options={options}
          />
          <ProductRating
            ratingValue={product.rating.rate}
            RatingTimes={product.rating.count}
          />
          {options && <Options />}
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
