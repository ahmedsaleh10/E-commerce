import styles from './style.module.css'

import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { IconButton } from '@mui/material';
const CardAction = () => {
  return (
    <div className={styles.CardAction}>
        <IconButton className={styles.wBG}>
        <FavoriteBorderOutlinedIcon className={styles.black}/>
        </IconButton>

        <IconButton className={styles.wBG}>
        <VisibilityOutlinedIcon className={styles.black}/>
        </IconButton>
    </div>
  )
}

export default CardAction