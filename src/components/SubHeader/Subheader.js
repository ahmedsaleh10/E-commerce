import React from 'react'
import styles from "./style.module.css"

const Subheader = ({title}) => {
  return (
    <div className={styles["subHeader"]}>

        <div className={styles["subHeaderBorder"]}></div>
        <span className={styles["subHeaderName"]}>{title}</span>

    </div>
    
  )
}

export default Subheader