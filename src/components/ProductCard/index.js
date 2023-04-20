import styles from "./style.module.css";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";




// import CardMedia from "@mui/material/CardMedia";
// import Button from '@mui/material/Button';

import ProductPrice from "./ProductPrice";
import ProductName from "./ProductName";
import ProductRaing from "./ProductRating";
import Badge from "./Badge";

import {FavoriteBorderOutlinedIcon} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

//  import FavoriteBorderOutlinedIcon from '@mui/icons/FavoriteBorderOutlined';
// import VisibilityOutlinedIcon from '@mui/icons/VisibilityOutlined';



// import CardHeader from "@mui/material/CardHeader";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import { red } from "@mui/material/colors";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

const ProductCard = () => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 270 }}>
      <Box className={styles.background}>
        <Badge className={styles.badgePosition}
          isNew={false}
          salePercentage={14}
        />

<IconButton>
      <FavoriteBorderOutlinedIcon />
    </IconButton>


        <img
          className={styles.productImage}
          src="./images/item.png"
          alt="product"
        />
      </Box>

      <CardContent>
        <ProductName />
       <ProductPrice price={120} oldPrice={160} />
        <ProductRaing ratingValue="3.5" RatingTimes="88" />
      </CardContent>
    </Card>
  );
};

export default ProductCard;
