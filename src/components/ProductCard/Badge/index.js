import styles from './style.module.css'

import React from 'react'

const Badge = (props) => {

    const {salePercentage,isNew}=props;
  return (
   <span className={salePercentage? styles.sale : isNew ? styles.new : styles.none}>
    {isNew ?`NEW`:``}
    {salePercentage? `-${salePercentage}%`:``}
   </span>
  )
}

export default Badge