import React from 'react'
import Layout from './Layout'
import {BrowserRouter,Routes,Route} from "react-router-dom"


const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<></>}/>
                <Route path="/details" element={<></>}/>
                <Route path="/about" element={<></>}/>
                <Route path="*" element={<> 404 not found</>}/>
            </Route>
        </Routes>
  </BrowserRouter>

  )
}

export default Routing