import { Typography } from '@mui/material'
import styles from './style.module.css'

import React from 'react'

const TeamMemerInfo = ({name,job}) => {
  return (
    <>
    <Typography className={styles.bold} variant="b" >
    {name}
</Typography>
<Typography  className={styles.sub} variant="subtitle1">
    {job}
</Typography>
    </>
  )
}

export default TeamMemerInfo