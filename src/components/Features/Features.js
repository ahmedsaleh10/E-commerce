import React from 'react'
import styles from './style.module.css'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import HeadsetMicIconOutlinedIcon from '@mui/icons-material/HeadsetMic';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import Feature from './Feature/Feature'


const Features = () => {
  return (
    <div className={styles['container']}>
        <Feature icon={<LocalShippingOutlinedIcon sx={{ color: 'white', fontSize:'40px' }}/>} header={'FREE AND FAST DELIVERY'} para={'Free delivery for all orders over $140'}/>
        <Feature icon={<HeadsetMicIconOutlinedIcon sx={{ color: 'white', fontSize:'40px' }}/>} header={'24/7 CUSTOMER SERVICE'} para={'Friendly 24/7 customer support'}/>
        <Feature icon={<VerifiedUserOutlinedIcon sx={{ color: 'white', fontSize:'40px' }} />} header={'MONEY BACK GUARANTEE'} para={'We reurn money within 30 days'}/>

    </div>
  )
}

export default Features