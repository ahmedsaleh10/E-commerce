import React from 'react'
import styles from "./style.module.css"

const ProductName = ({name}) => {
  return (
    <h4 className={styles.productName}>{name}</h4>
  )
}

export default ProductName