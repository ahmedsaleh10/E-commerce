import { Typography } from '@mui/material'
import styles from './style.module.css'

import React from 'react'

const TeamMemerInfo = ({name,job}) => {
  return (
    <>
    <Typography className={styles.bold} variant="b" >
    {name}
</Typography>
<Typography variant="subtitle1" component="h6">
    {job}
</Typography>
    </>
  )
}

export default TeamMemerInfo