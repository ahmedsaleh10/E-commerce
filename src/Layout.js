import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/header'
import { Container } from '@mui/material'

const Layout = () => {
  return (
    <Container>
        <Header/>
        {/* <Outlet/>
        <Footer/> */}
    </Container>
  )
}

export default Layout