import React from 'react'
import styles from './style.module.css'
import { Typography } from '@mui/material';

const Time = ({number,type}) => {
  return (
    <div className={styles['time']}>
        <Typography 
             sx={{
                fontFamily:'Poppins',
                fontWeight:'900' ,
                fontSize:'16px',
                lineHeight:'20px',
            }}
            bool='true'children={number} />

        <Typography 
             sx={{
                fontFamily:'Poppins',
                fontWeight:'600' ,
                fontSize:'11px',
                lineHeight:'18px',
            }}
            bool='true'children={type} />
    </div>
  )
}

export default Time