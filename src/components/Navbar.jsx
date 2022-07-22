import React from 'react';

function Navbar(){
return <div>
   <div className="container">
   <div className="row navbar">
    <div className="col-md-3 col-xs-2">
        <h4>SHOP.</h4>
    </div>
    <div className='col-md-6 col-xs-6 menu'>
        <ul>
            <li>Shop</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
    </div>
    <div className="col-md-3 col-xs-4 menu-1">
        <ul>
            <li>Search</li>
            <li><i class="fa-solid fa-magnifying-glass"></i></li>
            <li><i class="fa-solid fa-user"></i></li>
        </ul>
    </div>
   </div>
   </div>
   <hr></hr>
</div>
}

export default Navbar;