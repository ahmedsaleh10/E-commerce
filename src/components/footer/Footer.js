import { Typography, Grid, Button, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Divider from "@mui/material/Divider";
import style from "./index.module.css";
import Link from "@mui/material/Link";
import React from "react";
import Qrcode from "./footerImages/Qrcode 1.png";
import playStore from "./footerImages/google-play-store-logo.png";
import appStore from "./footerImages/download-appstore.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import Facebook from "./footerImages/Vector (1).svg";
import Twitter from "./footerImages/Vector (2).svg";
import Linkedin from "./footerImages/Vector (3).svg";
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
const Footer = () => {
  let links = [
    "My Account",
    "Login / Register",
    "Cart",
    "Wishlist",
    "Shop",
    "Privacy Policy",
    "Terms Of Use",
    "FAQ",
    "Contact",
  ];
  return (
    <footer>
      <div>
        <Grid
          className={style.footer}
          container
          justifyContent="space-evenly"
          spacing={2}
        >
          <Grid item>
            <Stack spacing={2}>
              <Typography variant="h5" align="left" color="#fff" gutterBottom>
                Exclusive
              </Typography>
              <Typography
                variant="subTitle2"
                align="left"
                color="#fff"
                paragraph
              >
                Subscribe
              </Typography>
              <Typography variant="subTitle2" align="left" color="#fff">
                Get 10% off your first order
              </Typography>
              <Button
                style={{ borderColor: "#fff", padding: "10px" }}
                variant="outlined"
                endIcon={<SendIcon sx={{ color: "white" }} />}
              >
                <Typography
                  style={{ color: "rgba(255, 255, 255, 0.5)", fontWeight: "2" }}
                  align="left"
                  variant="caption"
                  mr={3}
                >
                  Enter your email
                </Typography>
              </Button>
            </Stack>
          </Grid>
          <Grid item>
            <Typography variant="h6" align="left" color="#fff" mb={2}>
              Support
            </Typography>
            <Typography variant="subTitle2" align="left" color="#fff" paragraph>
              111 Bijoy sarani, Dhaka,
              <br /> DH 1515, Bangladesh.
            </Typography>
            <Typography variant="subTitle2" align="left" color="#fff" paragraph>
              exclusive@gmail.com
            </Typography>
            <Typography variant="subTitle2" align="left" color="#fff" paragraph>
              +88015-88888-9999
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" align="left" color="#fff" mb={2}>
              Account
            </Typography>
            <Stack spacing={2}>
              {links.slice(0, 5).map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  underline="hover"
                  sx={{ color: "#fff" }}
                >
                  <Typography>{item}</Typography>
                </Link>
              ))}
            </Stack>
          </Grid>
          <Grid item>
            <Typography variant="h6" align="left" color="#fff" mb={2}>
              Quick Link
            </Typography>
            <Stack spacing={2}>
              {links.slice(5, 9).map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  underline="hover"
                  sx={{ color: "#fff" }}
                >
                  <Typography>{item}</Typography>
                </Link>
              ))}
            </Stack>
          </Grid>
          <Grid item>
            <Typography variant="h6" align="left" color="#fff" mb={2}>
              Download App
            </Typography>
            <Typography variant="caption" align="left" color="#fff" paragraph>
              Save $3 with App New User Only
            </Typography>
            <Stack direction="row" spacing={1}>
              <img src={Qrcode} />
              <Stack spacing={2}>
                <img src={playStore} />
                <img src={appStore} />
              </Stack>
            </Stack>
            <Stack
              direction="row"
              spacing={5}
              alignItems="center"
              justifyContent="center"
              mt={2}
            >
              <img src={Facebook} />
              <img src={Twitter} /> <InstagramIcon sx={{ color: "#fff" }} />
              <img src={Linkedin} />
            </Stack>
          </Grid>
        </Grid>
      </div>
      <Stack direction="column" spacing={2}>
        <Divider
          variant="fullWidth"
          sx={{ marginTop: "60px" }}
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", height: 0.2 }}
          orientation="vertical"
          flexItem
        />
        <Stack direction='row'
        alignContent='center'
        spacing={.5}
        justifyContent="center"
        mt={2}
        >             
        <CopyrightOutlinedIcon fontSize="medium" sx={{
                      color: "rgba(255, 255, 255, 0.2)",
        }}/>
     <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.2)",
            fontWeight: "1",
          }}
          align="center"
          paragraph
          gutterBottom
        >

          Copyright Rimel 2022. All right reserved
        </Typography></Stack>

      </Stack>
    </footer>
  );
};
export default Footer;
