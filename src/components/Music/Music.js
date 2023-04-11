import React from 'react'
import styles from './style.module.css'
import { Typography } from '@mui/material';
import Time from './Time/Time';
import Button from '@mui/material/Button';

const Music = () => {
  return (
    <div className={styles['container']}>
        <div className={styles['info']}>
            <Typography 
             sx={{
                fontFamily:'Poppins',
                fontWeight:'600' ,
                fontSize:'16px',
                lineHeight:'20px',
                color:'#00FF66',
                paddingBottom:'2em'
            }}
            bool='true'children={"Categories"} />

            <Typography 
             sx={{
                    fontFamily:'Inter',
                    fontWeight:'600' ,
                    fontSize:'48px',
                    lineHeight:'60px',
                    color:'#FAFAFA',
                    paddingBottom:'32px'
                }}
                bool='true'children={"Enhance Your Music Experience"} />

            <Time number={'23'} type={'Hours'}/>
            <Time number={'05'} type={'Days'}/>
            <Time number={'59'} type={'Minutes'}/>
            <Time number={'35'} type={'Seconds'}/>

           
            <Button variant="contained" 
                sx={{
                    color:'white',
                    backgroundColor:'#00FF66',
                    padding:'16px 48px',
                    borderRadius:'4px',
                    
                }}>Buy Now!</Button>


        </div>
        <div className={styles['musicPhoto']}>
            <img src='./images/headphone.png' alt='JBL' />
        </div>  

    </div>
  )
}

export default Music