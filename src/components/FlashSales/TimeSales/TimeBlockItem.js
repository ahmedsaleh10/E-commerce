import React from 'react'
import styles from './styles.module.css'
function TimeBlockItem({timeLabel,typeLabel}) {
  return (
    <div className={styles.TimeBlockItem}>
      <div className={styles.timeLabel}>{timeLabel}</div>
      <div className={styles.typeLabel}>{typeLabel}</div>
    </div>
  )
}

export default TimeBlockItem