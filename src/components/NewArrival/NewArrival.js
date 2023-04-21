import React from 'react'
import {data} from '../../data'
import ArrivalItem from './ArrivalItem/ArrivalItem'
import Subheader from '../SubHeader/Subheader'
import Sectionheader from '../SectionHeader/Sectionheader'
import styles from './style.module.css'

const NewArrival = () => {
  return (
    <div className={styles['container']}>
      <Subheader title={'Featured'}/>
      <Sectionheader title={"New Arrival"}/>

      <div className={styles['newArrival']}>

        <ArrivalItem title='Play Station 5' description='Black and White version of the PS5 coming out on sale.' image="../../../images/ps5.png" className={styles['item1']} />
        <ArrivalItem title='Women’s Collections' description='Featured woman collections that give you another vibe.' className={styles['item2']}/>
        <ArrivalItem title='Speakers' description='Amazon wireless' className={styles['item3']}/>
        <ArrivalItem title='Perfume' description='GUCCI INTENSE'  className={styles['item4']}/>
         
      </div>
    </div>
  )
}

export default NewArrival



        //this for showing first 4 items in data .
//         {
//           data.slice(0,4).map((item,index) => {
            
//               console.log(item)
            
//             return(<ArrivalItem {...item} customClass={`item${index+1}`}/>)
            
// })
//         }  
        