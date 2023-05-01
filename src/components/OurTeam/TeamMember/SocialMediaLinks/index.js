import React from "react";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialMediaLinks = ({twitter,instagram,linkedin}) => {

    const redirectToUrl = (url) => {
        window.open(url, '_blank');
      };

      
  return (
    <div>
      <IconButton color="primary" aria-label="add to shopping cart" onClick={()=>{
        redirectToUrl(twitter)
      }}>
        <img src="./images/socialmedia/Icon-Twitter.png" alt="twitter" />
      </IconButton>

      <IconButton color="primary" aria-label="add to shopping cart" onClick={()=>{
         redirectToUrl(instagram)
      }}>
        <img src="./images/socialmedia/icon-instagram.png" alt="instagram" />
      </IconButton>

      <IconButton color="primary" aria-label="add to shopping cart" onClick={()=>{
         redirectToUrl(linkedin)
      }}>
        <img src="./images/socialmedia/Icon-Linkedin.png" alt="linkedin" />
      </IconButton>
    </div>
  );
};

export default SocialMediaLinks;
