import React from 'react'
import styles from "./style.module.css"

const ProductPrice = (props) => {
    const {price,oldPrice}=props
  return (
    <div className={styles.flex}>
    <span className={styles.price}>${price}</span>
  {oldPrice &&  <span className={styles.oldPrice}><del>${oldPrice}</del></span>}
    </div>
  )
}

export default ProductPrice