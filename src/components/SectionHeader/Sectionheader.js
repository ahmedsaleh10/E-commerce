import React from 'react'
import styles from './style.module.css'


const Sectionheader = ({title}) => {
  return (
    <div className={styles["sectionHeader"]}>{title}</div>
  )
}

export default Sectionheader