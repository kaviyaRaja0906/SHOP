import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Product from "./Product";
import Details from "./Details";
import Loading from "./Loading";

function App(){

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

return (
<>
    {loading === false ? (
<div>
<Router>
      <div>
        <Routes>
          <Route exact path='/'element={<Product/>}  />
          <Route exact path='/products/:id' element={<Details/>}  />
        </Routes>
      </div>
    </Router>
</div>
) : (
        <Loading />
      )}
      </>
);
}

export default App;