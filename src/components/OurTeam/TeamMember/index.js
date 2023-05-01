import React from 'react'
import styles from './style.module.css'
import { Box } from '@mui/material'
import TeamMemerInfo from './TeamMemerInfo'
import SocialMediaLinks from './SocialMediaLinks'

const TeamMember = () => {
  return (
    <Box className={styles.TeamMember}>
        <img src="./images/team/1.png" alt='Maher' />
        <TeamMemerInfo name="Tom Cruise" job="Founder & Chairman" />
        <SocialMediaLinks facebook="" instagram="" linkedin="" />
    </Box>
  )
}

export default TeamMember