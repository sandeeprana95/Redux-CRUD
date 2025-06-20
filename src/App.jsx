import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import AllProducts from "./components/AllProducts";


const App=()=>{
  return(
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/all"  element={<AllProducts/>} />
       </Routes>
       </BrowserRouter>
  )

}

export default App