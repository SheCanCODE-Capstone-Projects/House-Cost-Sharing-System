import React from 'react'
import './footer.css'
import logo from '../assets/logo.png'
import { IoIosCall } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

function Footer() {
  return (
    <section className='container-footer'>

      <div className='footer'>
              <div className='sb_footer-section_padding'>
                  <div className='sb_footer-links'>
                      <div className="sb_footer-links_div">
                        <div className='footer-image'>
                          <img src={logo} alt="logo" sizes='50px' />
                          <p>Find Your Home ...</p>
                        </div>
              </div>

              <div className='sb_footer-links_div'>
                  <h4>uses links</h4>
                  <a href="/Home">
                      <p>Home</p>
                  </a>
                  <a href="/about">
                      <p>About us</p>
                  </a>
                  <a href="/contact">
                      <p>Contact us</p>
                  </a>
                  <a href="/new property">
                      <p className='add-new-propert'>Add New Property <FaPlusCircle size={18} color='orange'/></p>
                  </a>
                
              </div>
            
              <div className="sb_footer-links_div">
                  <h4>Social</h4>
                      <a href="/Twitter">
                          <p>Twitter</p>
                      </a>
                      <a href="/Linkedin">
                          <p>Linkedin</p>
                       </a>
                      <a href="/Instagram">
                           <p>Instagram</p>
                       </a>
              </div>

              <div className="sb_footer-links_div">
                   <h4>Legal</h4>
                  <a href="/Terms">
                      <p>Terms</p>
                  </a> 
                  <a href="/Privacy">
                      <p>Privacy</p>
                  </a> 
                  <a href="/Cookies">
                      <p>Cookies</p>
                  </a> 
                  <a href="/Contact">
                      <p>Contact</p>
                  </a> 
              </div>
  
          </div>
           <hr></hr>
          </div>
          </div>
          <div className="sb_footer-copyright">
              <p>@{new Date().getFullYear}SpiltSpace.Co All right reseved.
              </p>
              <div className="sb_footer-bellow-links">
                <a href="call"><IoIosCall /></a>
                 <a href="twitter"> <FaTwitter /></a>
                 <a href="instagram"><FaInstagramSquare /></a>
                 <a href="linkedin"><FaLinkedin /></a>
              </div>
           </div>
          </section>
  );
}

export default Footer