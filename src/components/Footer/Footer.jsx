import React, { useState } from "react";
import style from "./footer.module.css";

const Footer = () => {

  const [scroll, setScroll] = useState(false)

  window.onscroll = function () {
     setScroll(true)
  }

  const topFunction = () => {
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0; 
  }
  
  return (
    <footer className={style.footer}>
      <div className={style.footerFrom}>
        <div className={style.up}>
                <span>Home </span>
                <span>Features </span>
                <span>Pricing </span>
                <span>FAQs </span>
                <span>About</span>
              </div>
              <div className={style.down}>
                  <p className={style.foot_p}>© 2021 Company, Inc</p>
              </div>
      </div>

      <div onClick={()=>topFunction()}  className={ scroll ? style.myBtn : style.display } title="Перейти к началу"></div>
      
    </footer>
  
    
  );
};
export default Footer;