import React,{useState, useEffect} from "react";
import axios from "axios";

function Suggestion(){
    const [products,setProducts]= useState([]);

    useEffect(() =>{
     fetchProducts();
    },[]);
  
    const fetchProducts =() =>{
      axios
      .get('https://fakestoreapi.com/products')
      .then((res) =>{
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) =>{
        console.log(err);
      });
    };
  return(
    <div>
   {products.map((product) => (
          <div className=" suggestion-card col-md-3">
            <div className="sugg-img" >
                <img src={product.image}/>
            </div>
            <div className="sugg-details">
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          </div>
   ))}
    </div>
  )
}

export default Suggestion;