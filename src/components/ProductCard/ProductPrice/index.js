import React from 'react'
import styles from "./style.module.css"

const ProductPrice = (props) => {
    const {price,oldPrice}=props
  return (
    <div className={styles.flex}>
 { price &&  <span className={styles.price}>${price}</span>}
  {oldPrice &&  <span className={styles.oldPrice}><del>9${oldPrice}</del></span>}
    </div>
  )
}

export default ProductPrice