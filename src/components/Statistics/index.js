import { Paper, Stack, Typography } from "@mui/material";
import style from "./style.module.css";

import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Feature from "../Features/Feature/Feature";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MoneyOutlinedIcon from "@mui/icons-material/MoneyOutlined";

const Statistics = () => {
  const statistics = [
    {
      value: "10.5k ",
      des: "Sallers active our site",
      icon: "store",
    },
    {
      value: "33k ",
      des: "Mopnthly Produduct Sale",
      icon: "money",
    },
    {
      value: "45.5k ",
      des: "Customer active in our site",
      icon: "cash",
    },
    {
      value: "25k ",
      des: "Anual gross sale in our site",
      icon: "home",
    },
  ];
  return (
    <Stack mt={10} direction="row" spacing={2}>
      {statistics.map((item) => {
        return (
          <Paper
            sx={{
              width: "270px",
              height: "230px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="outlined"
          >
            <Feature
              icon={
                item.icon == "store" ? (
                  <StoreOutlinedIcon
                    sx={{ color: "white", fontSize: "40px" }}
                  />
                ) : item.icon == "cash" ? (
                  <MoneyOutlinedIcon 
                  sx={{ color: "white", fontSize: "40px" }}
                  />
                ) : item.icon == "money" ? (
                  <PaidOutlinedIcon
                  sx={{ color: "white", fontSize: "40px" }}
                   />
                ) : (
                  <ShoppingBagOutlinedIcon 
                  sx={{ color: "white", fontSize: "40px" }}/>
                )
              }
              header={item.value}
              para={item.des}
            />
          </Paper>
        );
      })}
    </Stack>
  );
};

export default Statistics;
