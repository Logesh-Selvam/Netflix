import React from "react";
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/searchs.png'
import bell from '../../assets/bel.png'
import profile from '../../assets/profile.png'
import caret from '../../assets/carets.png'



const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img height={65} width={110} src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shoes</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browes by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img className="icons" height={20} width={20} src={search} alt="" />
        <p>Children</p>
        <img className="icons" height={20} width={20} src={bell} alt="" />
        <div className="navbar-profile">
          <img className="profile" src={profile} alt="" />
          <img height={10} width={15} src={caret} alt="" />
          <div className="dropdown">
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar