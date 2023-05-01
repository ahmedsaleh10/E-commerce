import React from 'react'
import Header from '../components/Header/header'
import Footer from '../components/footer/Footer'
import Breadcrumb from '../components/BreadCrumb'
import Features from '../components/Features/Features'
import { Container } from '@mui/material';
import OurTeam from '../components/OurTeam'
import OurStory from '../components/OurStory'

const About = () => {
  return (
    <>
        <Header/>
        <Container>
        <Breadcrumb  path="Home/About"/>
        <OurStory mt={2}/>
        <OurTeam mt={4}/>
        <Features mt={2}/>
        </Container>
        <Footer/>

    </>
  )
}

export default About