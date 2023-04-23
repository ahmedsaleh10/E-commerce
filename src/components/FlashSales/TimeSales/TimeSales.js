import React from 'react'
import styles from './styles.module.css'
import TimeBlockItem from './TimeBlockItem'
function TimeSales() {
  let timeArr = [
    
    {
      time:"03",
      label:"Days"
    },
    {
      time: ' : '
    },
    {
      time:"23",
      label:"Hours"
    },
    {
      time: ' : '
    },
    {
      time:"19",
      label:"Minutes"
    },
    {
      time: ' : '
    },
    {
      time:"56",
      label:"Secounds"
    }
  ]
  return (
    <div className={styles.TimeBlockList}>
      {timeArr.map(((item,index)=><TimeBlockItem timeLabel={item.time} typeLabel={item.label} key={index}/>))}
    </div>
  )
}

export default TimeSales