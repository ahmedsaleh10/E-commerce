import React from 'react'
import Stack from '@mui/material/Stack';
import HeaderSlider from './Slider/HeaderSlider';
import CustomizedAccordions from './Accordion/Accordion';



const SliderSection = () => {
  return (
    <Stack direction="row" sx={{margin:'0px 8.4375rem' , marginBottom:'8.75rem'}}  >
        <CustomizedAccordions />
        <HeaderSlider/>
    </Stack>
  )
}

export default SliderSection