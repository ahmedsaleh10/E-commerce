import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import styles from './style.module.css'
import { Box } from '@mui/material';


    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
      ))(() => ({
       
        '&:not(:last-child)': {
          borderBottom: 0,
        },
        '&:before': {
          display: 'none',
        },
      }));
      
      const AccordionSummary = styled((props) => (
        <MuiAccordionSummary sx={{minHeight:'30px', paddingLeft:'0px'}}
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
          {...props}
        />
      ))(({ theme }) => ({
        
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
          transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
          margin: '8px 0px'
        },
      }));



      const AccordionSummary2 = styled((props) => (
        <MuiAccordionSummary sx={{minHeight:'30px', paddingLeft:'0px'}} {...props}/>
      ))(() => ({
        '& .MuiAccordionSummary-content': {
            margin: '8px 0px'
          },        
      }));
      
      const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(0),
      }));
      
const CustomizedAccordions =()=> {
    const [expanded, setExpanded] = React.useState('');
      
    const handleChange = (panel) => (event, newExpanded) => {
     setExpanded(newExpanded ? panel : false);
        };
        return (
            <Box sx={{borderRight:'0.5px solid rgb(0,0,0,0.3)', marginRight:'45px' }}>

              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography sx={{paddingRight:'55px' , fontFamily:'Poppins'}} >Woman’s Fashion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul className={styles['list']}>
                    <li className={styles['listItem']} >Woman’s T-shirts</li>
                    <li className={styles['listItem']}>Woman’s Jeans</li>
                  </ul>
                </AccordionDetails>
              </Accordion>


              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                  <Typography sx={{paddingRight:'55px',fontFamily:'Poppins'}}>Men’s Fashion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                 <ul className={styles['list']}>
                    <li className={styles['listItem']} >Men’s T-shirts</li>
                    <li className={styles['listItem']}>Men’s Jeans</li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              
              <Accordion  >
                <AccordionSummary2 >
                  <Typography sx={{fontFamily:'Poppins'}}>Electronics</Typography>
                </AccordionSummary2>
              </Accordion>

              <Accordion  >
                <AccordionSummary2 >
                  <Typography sx={{fontFamily:'Poppins'}}>Home & Lifestyle</Typography>
                </AccordionSummary2>
              </Accordion>

              <Accordion  >
                <AccordionSummary2 >
                  <Typography sx={{fontFamily:'Poppins'}}>Medicine</Typography>
                </AccordionSummary2>
              </Accordion>

              <Accordion  >
                <AccordionSummary2 >
                  <Typography sx={{fontFamily:'Poppins'}}>Sports & Outdoor</Typography>
                </AccordionSummary2>
              </Accordion>

              <Accordion  >
                <AccordionSummary2 >
                  <Typography sx={{fontFamily:'Poppins'}}>Baby’s & Toys</Typography>
                </AccordionSummary2>
              </Accordion>

              <Accordion  >
                <AccordionSummary2 >
                  <Typography sx={{fontFamily:'Poppins'}}>Groceries & Pets</Typography>
                </AccordionSummary2>
              </Accordion>

              <Accordion  >
                <AccordionSummary2 >
                  <Typography sx={{fontFamily:'Poppins'}}>Health & Beauty</Typography>
                </AccordionSummary2>
              </Accordion>
            </Box>
          );
}


export default CustomizedAccordions