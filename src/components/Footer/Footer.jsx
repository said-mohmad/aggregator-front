import React from "react";
import style from "./footer.module.css";

const Footer = () => {
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
    </footer>
  );
};
export default Footer;
