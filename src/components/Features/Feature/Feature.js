import React from 'react'
import styles from './style.module.css'
import { Typography } from '@mui/material';


const Feature = ({icon,header,para}) => {
  return (
    <div className={styles['container']}>
        <div className={styles['iconBorder']}>
            <div className={styles['icon']}>
                {icon} 
            </div>
            
        </div>
     
        <Typography 
                sx={{
                    display: 'block',
                    fontFamily:'Inter',
                    fontWeight:'600' ,
                    fontSize:'20px',
                    paddingBottom:'8px',
                    paddingTop:'24px',
                    
                }}
                bool='true'children={header} />

            <Typography 
                sx={{
                    
                    fontFamily:'Inter',
                    fontWeight:'400' ,
                    fontSize:'14px',
                    paddingBottom:'16px',
                    margin:'0px',
                }}
                bool='true'children={para} />  

    </div>
  )
}

export default Feature