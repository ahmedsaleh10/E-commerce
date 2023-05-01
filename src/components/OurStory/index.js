import { Box, Typography } from "@mui/material";
import styles from './style.module.css';

import React from "react";

const OurStory = () => {
  return (
    <div className={styles.flex}>
      <Box mt={15} className={styles.ourStory}>
        <Typography className={styles.storyHeader} variant="h1">
          Our Story
        </Typography>

        <Typography className={styles.p} mt={2} variant="body2">
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </Typography>

        <Typography className={styles.p} variant="body2" mt={2}>
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </Typography>
      </Box>
    <div>
    <img src='./images/story.png'/>
    </div>

    </div>
  );
};

export default OurStory;
