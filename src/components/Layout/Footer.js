import React, { Component } from "react";

import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
class Footer extends Component {
  render() {
    return (
      <div>
        <footer style={{    background: "#196ede",
    height: "auto",
    borderRadius: "8px",fontFamily:"poppins",margin:"0px"}} className=" text-white mt-5 p-4 text-center">
          Copyright &copy; {new Date().getFullYear()} DSC-IIUI
         <div className="col-lg-12" style={{borderRadius:"10px",background:"#196ede"}}>
  <ul className="social-network social-circle">
    <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-rss" /></a></li>
    <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook" /></a></li>
    <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter" /></a></li>
    <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus" /></a></li>
    <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
  </ul>
</div>

            
            </footer>
      </div>
    );
  }
}

export default Footer;
