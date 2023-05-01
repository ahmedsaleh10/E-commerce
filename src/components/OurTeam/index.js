import React from "react";

import TeamMember from "./TeamMember";
import styles from "./style.module.css";
import { Box } from "@mui/material";

const OurTeam = () => {
  const team = [
    { name: "Tom Cruise", job: "Founder & Chairman" ,img:"1.png"},
    { name: "Emma Watson", job: "Managing Director" ,img:"2.png"},
    { name: "Will Smith", job: "Product Designer" ,img:"3.png"},
  ];
  return (
    <Box mt={8} className={styles.team}>
        {
            team.map((member)=> <TeamMember name={member.name} job={member.job} img={member.img} />)
        }
      
    </Box>
  );
};

export default OurTeam;
