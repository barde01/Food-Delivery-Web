import React, { useContext, useState } from 'react'
import "./Navbar.css"
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';


const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("Home");

    const{getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      {/* <img className='logo' src={assets.logo} alt=""></img> */}
      <Link to='/'><h1>Food Delivery</h1></Link>
      <ul className='navbar-manu'>
        <Link to='/' onClick ={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href="#explore-menu"  onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href="#footer" onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt=""></img>
        <div className='navbar-search-icon'>
            <Link to='/cart'><img src={assets.basket_icon} alt=""></img></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
