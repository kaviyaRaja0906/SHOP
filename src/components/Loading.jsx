import React,{useState,useEffect} from "react";
import loading from "../loading.css";

function Loading(){
return(
<div class="gooey">
  <span class="dot"></span>
  <div class="dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
    )
}

export default Loading;