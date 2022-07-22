import React ,{useState,useEffect} from "react";
import { Link ,useParams} from 'react-router-dom';
import axios from "axios";
import details from "../details.css";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Details = ({ match }) => {
    const [data,setData]= useState([]);
    const { id } = useParams();
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[price,setPrice] = useState("");
    const[rating,setRating]=useState("");
    const [count,setCount]= useState("");
    const[image,setImage]=useState("");
    console.log(id);

    useEffect(() =>{
     fetchProduct();
    },[]);
  
    const fetchProduct =() =>{
      axios
      .get("https://fakestoreapi.com/products/"+ id)
      .then((res) =>{
        setData(res.data);
        setTitle(res.data.title)
        setPrice(res.data.price)
        setDescription(res.data.description)
        setRating(res.data.rating.rate)
        setCount(res.data.rating.count)
        setImage(res.data.image)
        console.log(res.data);
      })
      .catch((err) =>{
        console.log(err);
      });
    };
  
return(
    <div className="details">
    <Navbar />
        <div className="container" >
       <div className="row">

       <div className="product-img col-md-5">
        <img src={image}></img>
      </div>

      <div className="product-details col-md-5">
        <h3>{title}</h3>
        <h4 className="product-price">${price}</h4>

        <div className="product-description">
        <p>{description}</p>
        </div>
        <br></br>

        <div className="rating">
        <p>⭐{rating}|✔️{count} Reviews</p>
        </div>

        <div>
        <h5>Quantity</h5>
        <input className="qnty-input" value="1"></input>
        </div>
        <br></br>

        <div className="btns">
         <button className="btn btn-md cart-btn">Add to cart</button>
         <pre></pre>
         <button className="btn btn-md buy-btn">Buy it now</button>
        </div>
        <br></br>

        <div className="share">
            <p>SHARE THIS  <i class="fa-brands fa-facebook-f"></i>  <i class="fa-brands fa-twitter"></i>  <i class="fa-brands fa-pinterest-p"></i></p>
        </div>

      </div>
       </div>
    </div>
    <Footer />
    </div>
)
}

export default Details;