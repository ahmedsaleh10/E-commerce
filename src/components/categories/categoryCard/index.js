import React from 'react';
import { Paper, Typography, makeStyles, Box } from '@material-ui/core';

const CategoryList=({data})=> {
  return (

    <Paper
      style={{
        width: "17rem",
        height: "9rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      variant="outlined"
    >
      <img src={data.icon} alt={data.title} />
      <Typography mt={2} variant="subtitle1">
        {data.title}
      </Typography>
    </Paper>
  );
    }

export default CategoryList;
