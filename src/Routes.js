import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage';
import ProductDetailsPage from './pages/ProductDetailsPage';


const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route path="/details/:productId" element={<ProductDetailsPage/>}/>
                <Route path="/*" element={<NotFoundPage/>}/>
        </Routes>
  </BrowserRouter>

  )
}

export default Routing