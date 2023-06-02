import React from "react";
import "./assets/css/footer.css";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import { useEffect } from "react";

export default function Footer() {
  return (
    <div id="footer">
        <div className="footer-container">
              <div className="logo-footer">
                  <img src={process.env.PUBLIC_URL + "jpg/logofinal.svg"} alt={process.env.PUBLIC_URL + "jpg/no-image-pc.jpg"} width="70" className="logo" />
                  <p className="title-logo-container">Việt Nam Tour</p>
              </div>
              <div className="follow-us">
                  <p className="title2 title">Follow us</p>
                  <i  className="bi bi-facebook anh1"></i>
                  <i  className="bi bi-instagram anh2"></i>
                  <i  className="bi bi-twitter anh3"></i>
                  <i  className="bi bi-youtube anh4"></i>
              </div>
              <div className="fanpage" >
                    <p className="title">Fanpage</p>
                    <div className="fb-page" data-href="https://www.facebook.com/profile.php?id=100093005413578" data-tabs="s&#x1ef1; ki&#x1ec7;n" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/profile.php?id=100093005413578" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/profile.php?id=100093005413578">Việt Nam Tour</a></blockquote></div>
              </div>
              <div className="call-us">
                  <p className="title3 title">Call us</p>
                  <p className="title4"><i className="bi bi-phone">0862327430</i></p>
                  <p className="title4"><i className="bi bi-phone">0903719548</i></p>
              </div> 
              <hr/>
        </div>
        <div className="end">
            <p>Chính sách bảo mật</p>
            <p>Điều khoản dịch vụ</p>
            <p>Phản Hồi</p>
        </div>
    </div>
    
  );
}