import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box, Typography } from "@mui/material";

const BreadCrumb = ({ path }) => {
  const steps = path.split("/");
  console.log(steps);

  return (
    <Box mt={10}>
      <Breadcrumbs aria-label="breadcrumb">
        {steps.map((step, index) => {
          return index == steps.length - 1 ? (
            <Typography
              children={step}
              variant="span"
              color={"black"}
              sx={{ fontFamily: "Poppins", fontSize: "14" }}
            />
          ) : (
            <Link
              underline="hover"
              color="inherit"
              href="/"
              sx={{ fontFamily: "Poppins", fontSize: "14" }}
            >
              {" "}
              {step}{" "}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadCrumb;
