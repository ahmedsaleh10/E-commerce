import React, { useState } from "react";
import Sectionheader from "../SectionHeader/Sectionheader";
import Subheader from "../SubHeader/Subheader";
import { Divider, Stack, Paper, Typography, Container } from "@mui/material";
import Phone from "./categoriesImages/Category-CellPhone.svg";
import Watch from "./categoriesImages/Category-SmartWatch.svg";
import Computers from "./categoriesImages/Category-Computer.svg";
import Camera from "./categoriesImages/Category-Camera.svg";
import Gaming from "./categoriesImages/Category-Gamepad.svg";
import leftArrow from "./categoriesImages/Fill With Left Arrow.svg";
import rightArrow from "./categoriesImages/Fill with Right Arrow.svg";
import HeadPhones from "./categoriesImages/Category-Headphone.svg";

const Category = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(6);
  
  const handleLeftArrowClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
    }
  };
  
  const handleRightArrowClick = () => {
    if (endIndex < Categories.length - 1) {
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex + 1);
    }
  };
  let Categories = [
    {
      id: 0,
      icon: Phone,
      title: "Phones",
      selected: false,
    },
    {
      id: 1,
      icon: Computers,
      title: "Computers",
      selected: false,
    },
    {
      id: 2,
      icon: Watch,
      title: "SmartWatch",
      selected: false,
    },
    {
      id: 3,
      icon: Camera,
      title: "Camera",
      selected: true,
    },
    {
      id: 4,
      icon: HeadPhones,
      title: "HeadPhones",
      selected: false,
    },
    {
      id: 5,
      icon: Gaming,
      title: "Gaming",
      selected: false,
    },
    {
      id: 6,
      icon: Phone,
      title: "Phones",
      selected: false,
    },    {
      id: 7,
      icon: Computers,
      title: "Computers",
      selected: false,
    },    {
      id: 8,
      icon: Watch,
      title: "SmartWatch",
      selected: false,
    },
  ];
  const newCategories = [...Categories];
  const [categories, setCategories] = useState(newCategories);
  const handleCategoryClick = (index) => {
    const newCategories = categories.map((item, i) => {
      return {
        ...item,
        selected: i === index,
      };
    });
    setCategories(newCategories);
  };
  return (
    <Container>
      <Divider
        variant="fullWidth"
        sx={{ marginTop: "60px" }}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", height: 0.2 }}
        orientation="vertical"
        flexItem
      />
      <Stack mt={9}>
        <Subheader title={"Categories"} />
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          <Sectionheader title={"Browse By Category"} />
          <Stack spacing={1} direction="row">
            <img src={leftArrow} onClick={handleLeftArrowClick} />
            <img src={rightArrow} onClick={handleRightArrowClick} />
          </Stack>
        </Stack>
        <Stack spacing={3.5} direction="row" mt={6}>
          {Categories.slice(startIndex,endIndex).map((item, index) => (
            //  <CategoryList key={item.id} data={item} />

            <Paper
              key={index}
              sx={{
                width: "17rem",
                height: "9rem",
                display: "flex",
                flexDirection: "column",
                backgroundColor: item.selected ? "#DB4444" : "inherit",
                justifyContent: "center",
                alignItems: "center",
              }}
              variant="outlined"
              onClick={() => handleCategoryClick(index)}
            >
              <img src={item.icon} alt={item.title} />
              <Typography
                align="center"
                color={item.selected ? "#fff" : "inherit"}
                mt={2}
                variant="subtitle1"
              >
                {item.title}
              </Typography>
            </Paper>
          ))}
        </Stack>
      </Stack>
      <Divider
        variant="fullWidth"
        sx={{ marginTop: "60px" }}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", height: 0.2 }}
        orientation="vertical"
        flexItem
      />
    </Container>
  );
};

export default Category;
