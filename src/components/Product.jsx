import React, { useState, useEffect } from "react";
import { Router,Route,Routes,useNavigate, Link } from 'react-router-dom';
import axios from "axios";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";

function Product(){

  let navigate = useNavigate();

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

 return (
  <div>
  <Banner />
  <Navbar />
  <div className="products">
 {products.map((product) => (
  <div className="product-card" key={product.id} onClick={() => navigate(`/products/${product.id}`)}>
 <div className="product-tumb">
   <img src={product.image} alt="" />
 </div>
 <div className="product-details">
 <p className="product-category">{product.category}</p>
   <h5><a href="">{product.title}</a></h5>
   <p>⭐{product.rating.rate}|✔️{product.rating.count} Reviews</p>
   <div className="product-bottom-details">
     <div className="product-price">${product.price}</div>
     <div>
       <button className="product-btn">Buy Now</button>
     </div>
   </div>
 </div>
</div>
 ))}
 </div>
 <Footer />
  </div>

)
}

export default Product;