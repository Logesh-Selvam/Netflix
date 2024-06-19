import React from "react";
import './Footer.css'
import youtube from '../../assets/youtube.svg'
import twit from '../../assets/twit.svg'
import insta from '../../assets/insta.svg'
import fb from '../../assets/fb.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img height={24} width={21} src={fb} alt="" />
        <img height={24} width={24} src={insta} alt="" />
        <img height={24} width={24} src={twit} alt="" />
        <img height={24} width={24} src={youtube} alt="" />
      </div>
      <ul>
        <li>Audio Descripion</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact US</li>
      </ul>
      <p className="copuright-text">© 1997-2024 Netflix, Inc.</p>
    </div>
  )
}
export default Footer