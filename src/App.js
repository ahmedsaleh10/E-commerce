import {BrowserRouter,Routes,Route} from "react-router-dom"
import Routing from "./Routes";

function App() {

  return (
      <Routing/>
  );
  // return (
  //   <BrowserRouter>
  //     <Routes>

  //       <Route index element={HomePage}/>
  //       <Route path="/details" element={detailsPage}/>
  //       <Route path="/about" element={AboutUs}/>
  //       <Route path="*" element={NotFound}/>

  //     </Routes>
  //   </BrowserRouter>
  // );
}

export default App;
