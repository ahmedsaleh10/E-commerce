import { Button } from "@mui/material";
import React from "react";

const SizeButton = ({ content, selected, onClick }) => {
  const handleOnClick = () => {
    onClick(content);
  };

  return (
    <Button
      onClick={handleOnClick}
      sx={{
        "&:hover": { backgroundColor: selected ? "#DB4444" : "white" },
        border: "1px solid black",
        borderRadius: "2px",
        padding: "3px 2px",
        minWidth: "32px",
        color: selected ? "white" : "black",
        marginRight: "1rem",
        fontFamily: "Poppins",
        backgroundColor: selected ? "#DB4444" : "white",
      }}
    >
      {content}
    </Button>
  );
};

export default SizeButton;
