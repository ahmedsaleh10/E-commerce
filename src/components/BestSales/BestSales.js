import React from "react";
import Subheader from "../SubHeader/Subheader";
import Sectionheader from "../SectionHeader/Sectionheader";
import { Box, Button, Container, Stack } from "@mui/material";
import data from "../../data";
import Grid from "@mui/material/Grid";

import ProductCard from "../ProductCard";
const BestSales = () => {
  return (
    <Container maxWidth="lg">
      <Stack
        mt={10}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
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
            "&:size": { xs: "small", lg: "large" },
          }}
        >
          View All
        </Button>
      </Stack>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 3, sm: 2, md: 4 }}
        columns={{ xs: 3.5, sm: 7, md: 12 }}
      >
        {data
          .filter((item) => item.rating.rate > 4)
          .slice(0, 4)
          .map((item, index) => (
            <Grid item xs={3} sm={3} md={3} lg={1} key={index}>
              <ProductCard product={item} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default BestSales;
