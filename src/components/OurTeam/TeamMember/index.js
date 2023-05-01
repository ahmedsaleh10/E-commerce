import React from 'react'
import styles from './style.module.css'
import { Box } from '@mui/material'
import TeamMemerInfo from './TeamMemerInfo'
import SocialMediaLinks from './SocialMediaLinks'

const TeamMember = ({name,job,img}) => {
  return (
    <Box  mt={2} className={styles.TeamMember}>
        <img src={`./images/team/${img}`} alt='Maher' />
        <TeamMemerInfo name={name} job={job} />
        <SocialMediaLinks twitter={"https://twitter.com"} instagram={'https://instagram.com'} linkedin={"https://linkedin.com"} />
    </Box>
  )
}

export default TeamMember