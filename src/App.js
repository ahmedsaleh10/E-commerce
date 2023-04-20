import {BrowserRouter,Routes,Route} from "react-router-dom"
import ProductCard from "./components/ProductCard";

function App() {
  return (
    

    <BrowserRouter>
      <Routes>

        <Route index element={<ProductCard 
        salePercentage={0}
        isNew={true}
        price={120}
        oldPrice={122}
        ratingValue="5"
        RatingTimes="88"
        /> }/>
        {/* <Route path="/details" element={detailsPage}/>
        <Route path="/about" element={AboutUs}/>
        <Route path="*" element={NotFound}/> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
