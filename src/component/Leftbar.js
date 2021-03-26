import React from 'react'
import {Link} from "react-router-dom";

function Leftbar({onDrink,onCake}) {
    return (
        
        <div className="leftbar">
            <div className="leftbarcontainer">
            <div className="name">café de belle</div>
            <div onClick={onDrink} className="tm-page-link"> <i class="fas fa-mug-hot tm-page-link-icon"></i>Drink Menu</div>
            <div onClick={onCake}className="tm-page-link"><i class="fas fa-glass-martini tm-page-link-icon"></i>Cake Menu</div>
            <Link to="/login">  <div className="tm-page-link"> <i class="fas fa-users tm-page-link-icon"></i>Login</div> </Link>
            <Link to="/basket"> <div className="basket"></div></Link>
            </div>
        </div>

       
    )
}

export default Leftbar
