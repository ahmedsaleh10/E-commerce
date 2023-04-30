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
import { Button, Link } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, options, oldPrice, isNew, salePercentage }) => {
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/details/${id}`);
  }

  function handlebutton(){
    navigate(`/`)
  }

  return (
    <Link className={styles.link} underline="none">
      <Card
        variant="outlined"
        sx={{ width: 270,overflow:'auto' }}
      >
        <Box className={styles.background}>
          <Badge
            className={styles.saleBadge}
            isNew={isNew}
            salePercentage={salePercentage}
          />
          <CardAction />
          <img
            onClick={() => handleClick(product.id)}
            className={styles.productImage}
            src={product.image}
            alt="product"
          />
          <Button
            onClick={handlebutton}
            className={styles.button}
            sx={{
              "&:hover": { color: "white", backgroundColor: "black" },
              position: "absolute",
              bottom: "0px",
              fontFamily: "Poppins",
              backgroundColor: "black",
              color: "white",
              width: "100%",
              display:'none'
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
    </Link>
  );
};

export default ProductCard;
