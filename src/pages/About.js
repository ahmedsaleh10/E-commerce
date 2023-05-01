import React from 'react'
import Header from '../components/Header/header'
import Footer from '../components/footer/Footer'
import Breadcrumb from '../components/BreadCrumb'
import Features from '../components/Features/Features'

const About = () => {
  return (
    <>
        <Header/>
        <Breadcrumb  path="Home/About"/>
        <Features/>
        <Footer/>

    </>
  )
}

export default About