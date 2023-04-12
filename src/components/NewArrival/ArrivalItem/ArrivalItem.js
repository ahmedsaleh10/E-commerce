import React from 'react'
import styles from "./style.module.css"
import { Typography, colors } from '@mui/material';
import { Link } from '@mui/material';

const ArrivalItem = ({title,description,image , className}) => {

  return (

         <div className={className}>
            <div className={styles['itemInfo']}>
                <Typography 
                sx={{
                    fontFamily:'Inter',
                    fontWeight:'600' ,
                    fontSize:'24px',
                    paddingBottom:'10px',
                    letterSpacing:'0.03em'
                }} 
                bool='true'children={title} />

                <Typography 
                sx={{
                    fontWeight:'400' ,
                    fontSize:'14px',
                    width:'40%',
                    paddingBottom:'16px',
                }}
                bool='true'children={description} />



                <Link href="#" underline="always" 
                    sx={{
                        fontWeight:'400' ,
                        fontSize:'16px',
                        color:'white',
                        marginTop:'1em',
                        borderBottom:"1px solid gray"
                    }}
                >
                    {'Shop Now'}
                </Link>

                </div>
            
         </div>
         
          
  )
}

export default ArrivalItem