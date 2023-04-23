import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage';


const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" >
                <Route index path="homepage"element={<HomePage/>}/>
                <Route path="details" element={<></>}/>
                <Route path="about" element={<></>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
  </BrowserRouter>

  )
}

export default Routing