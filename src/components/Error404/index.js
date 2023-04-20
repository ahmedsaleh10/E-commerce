import { Button, Stack, Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <Stack justifyContent="center" alignItems="center" spacing={5}mt={5}>
      <Typography
        variant="h1"
        mt={2}
        sx={{
          fontFamily: "Poppins",
        }}
      >
        404 Not Found
      </Typography>
      <Typography
        mt={2}
        variant="subTitle2"
        sx={{
          fontFamily: "Poppins",
          fontSize: 16,
        }}
      >
        Your visited page not found. You may go home page.
      </Typography>
      <Button
        children={"Back to home page"}
        sx={{
          "&:hover": { backgroundColor: "#DB4444" },
          color: "white",
          backgroundColor: "#DB4444",
          padding: "0.7rem 3rem",
          fontFamily: "Poppins",
        }}
      />
    </Stack>
  );
};

export default NotFound;
