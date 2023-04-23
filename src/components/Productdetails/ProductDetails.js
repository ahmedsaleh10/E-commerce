import { Box, Stack, Typography, Rating, Button } from "@mui/material";
import React from "react";
import RoadMap from "./RoadMap/RoadMap";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import RadioCheck from "./RadioCheck/RadioCheck";
import { useState } from "react";
import SizeButton from "./SizeButton/SizeButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import BuyingFeatures from "./BuyingFeatures/BuyingFeatures";
import data from "../../data.js";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard";
import Subheader from "../SubHeader/Subheader";

const ProductDetails = () => {
  const { productId } = useParams();
  const singleProduct = data.find(
    (product) => product.id === parseInt(productId)
  );
  const {
    title,
    price,
    description,
    category,
    rating: { rate, count },
    image,
  } = singleProduct;
  const [number, setNumber] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const sizes = ["XS", "S", "M", "L", "XL"];
  const photos = [1, 2, 3, 4];

  const handleOnChangeSelectedSize = (value) => {
    setSelectedSize(value);
  };

  const handleAddNumber = () => {
    setNumber(number + 1);
  };

  const handleDeleteNumber = () => {
    setNumber(number - 1);
  };

  return (
    <Box sx={{ margin: "0px 8.4375rem" }}>
      <Box sx={{ marginBottom: "5rem" }}>
        <RoadMap name={title} />
      </Box>
      <Stack mb={20}flexDirection={"row"} justifyContent={"space-between"}>
        <Stack justifyContent={"space-between"}>
          {photos.map(() => {
            return (
              <img
                src={image}
                width={"170px"}
                height={"140px"}
                alt={`${category}`}
              />
            );
          })}
        </Stack>

        <Stack justifyContent={"center"} sx={{ marginRight: "2.5rem" }}>
          <img
            src={image}
            width={"500px"}
            height={"600px"}
            alt={`${category}`}
          />
        </Stack>

        <Box sx={{ width: "400px" }}>
          <Typography
            children={title}
            variant="h3"
            sx={{
              fontFamily: "Inter",
              fontSize: "1.5rem",
              marginBottom: "1rem",
              fontWeight: "600",
            }}
          />

          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            sx={{ fontFamily: "Poppins", marginBottom: "1rem" }}
          >
            <Rating
              name="read-only"
              value={rate}
              readOnly
              sx={{ marginRight: "0.5rem" }}
            />
            <Typography
              children={`(${count} Reviews)`}
              variant="span"
              sx={{
                opacity: "0.5",
                fontSize: "0.9rem",
                paddingRight: "1rem",
                borderRight: "1px solid black",
              }}
            />
            <Typography
              children={"In Stock"}
              variant="span"
              sx={{ color: "#00FF66", paddingLeft: "1rem", fontSize: "0.9rem" }}
            />
          </Stack>

          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            sx={{
              fontSize: "1.5rem",
              fontFamily: "Inter",
              lineHeight: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <AttachMoneyIcon />
            <Typography variant="span" children={price} />
          </Stack>

          <Typography
            paragraph
            children={description}
            sx={{
              fontFamily: "Poppins",
              fontSize: "0.9rem",
              paddingBottom: "1.5rem",
              borderBottom: "1px solid black",
            }}
          />

          <Box>
            <Typography
              variant="span"
              children={"Colours: "}
              sx={{
                fontFamily: "Inter",
                paddingTop: "1.5rem",
                fontSize: "1.25rem",
                marginBottom: "1.5rem",
              }}
            />
            <RadioCheck />
          </Box>

          <Box sx={{ padding: "1.5rem 0rem" }}>
            <Typography
              variant="span"
              children={"Size:"}
              sx={{
                fontSize: "1.2rem",
                fontFamily: "Inter",
                paddingRight: "1.5rem",
              }}
            />
            {sizes.map((size) => {
              return (
                <SizeButton
                  onClick={handleOnChangeSelectedSize}
                  content={size}
                  selected={size === selectedSize}
                />
              );
            })}
          </Box>

          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            sx={{ paddingBottom: "2.5rem" }}
          >
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              sx={{ border: "0.5px solid black", borderRadius: "5px" }}
            >
              <Button
                onClick={handleDeleteNumber}
                children={<RemoveIcon />}
                sx={{
                  color: "black",
                  borderRight: "0.5px solid black",
                  borderRadius: "0px",
                  minWidth: "fit-content",
                  height: "100%",
                }}
              />
              <Typography
                children={number}
                sx={{
                  padding: "0.7rem 2rem",
                  fontSize: "1.2rem",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                }}
              />
              <Button
                onClick={handleAddNumber}
                children={<AddIcon />}
                sx={{
                  "&:hover": { backgroundColor: "#DB4444" },
                  color: "white",
                  backgroundColor: "#DB4444",
                  borderRadius: "0px 4px 4px 0px",
                  minWidth: "fit-content",
                  height: "100%",
                }}
              />
            </Stack>

            <Button
              children={"Buy Now"}
              sx={{
                "&:hover": { backgroundColor: "#DB4444" },
                color: "white",
                backgroundColor: "#DB4444",
                padding: "0.7rem 3rem",
                fontFamily: "Poppins",
              }}
            />
            <Button
              children={<FavoriteBorderIcon />}
              sx={{
                color: "black",
                padding: "0.5rem",
                border: "1px solid black",
                minWidth: "fit-content",
                borderRadius: "4px",
              }}
            />
          </Stack>
          <Box>
            <BuyingFeatures />
          </Box>
        </Box>
      </Stack>
      <Subheader title="Related Item"  />

      <Stack justifyContent={"space-between"} flexDirection={"row"} mt={10}>
        {data
          .filter((item) => item.category === category).slice(0,4)
          .map((item, index) => (
            <ProductCard product={item} />
          ))}
      </Stack>
    </Box>
  );
};

export default ProductDetails;
