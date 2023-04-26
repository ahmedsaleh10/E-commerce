import React from "react";
import Subheader from "../SubHeader/Subheader";
import Sectionheader from "../SectionHeader/Sectionheader";
import { Box, Button, Container, Stack } from "@mui/material";
import data from '../../data'
import ProductCard from "../ProductCard";
const BestSales = () => {
  return (
    <Box  sx={{padding:'0px',margin:'0px 8.4375rem'}}>
      <Stack mt={10}direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Subheader title="this Month" />
          <Sectionheader title="Best Selling Products" />
        </Box>
          <Button
          mb={5}
            sx={{
              backgroundColor: "#DB4444",
              padding: "1rem 3rem",
              color: "white",
              fontFamily: "Poppins",
              textTransform: "none",
              "&:hover": { backgroundColor: "#DB4444", color: "white" },
            }}
          >
            View All
          </Button>
      </Stack>
      <Stack justifyContent={"space-between"} flexDirection={"row"} mt={1} mb={20}>
        {data
          .filter((item) => item.rating.rate >4).slice(0,4)
          .map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
      </Stack>
    </Box>
  );
};

export default BestSales;
