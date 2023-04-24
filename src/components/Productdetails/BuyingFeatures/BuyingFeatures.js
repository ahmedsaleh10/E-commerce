import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CachedIcon from "@mui/icons-material/Cached";

const BuyingFeatures = () => {
  return (
    <Box
      sx={{
        border: "0.5px solid black",
        padding: "1.5rem 0rem",
        borderRadius: "4px",
      }}
    >
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        sx={{ padding: "0rem 1.5rem 0.5rem 1.5rem" }}
      >
        <LocalShippingOutlinedIcon
          sx={{ fontSize: "2.5rem", paddingRight: "1.5rem" }}
        />
        <Box>
          <Typography
            children={"Free Delivery"}
            sx={{
              paddingBottom: "0.5rem",
              fontWeight: "600",
              fontFamily: "Poppins",
            }}
          />
          <Typography
            children={"Enter your postal code for Delivery Availability"}
            sx={{
              fontSize: "0.8rem",
              textDecoration: "underline",
              fontFamily: "Poppins",
            }}
          />
        </Box>
      </Stack>
      <hr />
      <Box>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          sx={{ padding: "1rem 1.5rem 0.5rem 1.5rem" }}
        >
          <CachedIcon sx={{ fontSize: "2.5rem", paddingRight: "1.5rem" }} />
          <Box>
            <Typography
              children={"Return Delivery"}
              sx={{
                paddingBottom: "0.5rem",
                fontWeight: "600",
                fontFamily: "Poppins",
              }}
            />
            <Typography
              children={"Free 30 Days Delivery Returns. Details"}
              sx={{
                fontSize: "0.8rem",
                textDecoration: "underline",
                fontFamily: "Poppins",
              }}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default BuyingFeatures;
