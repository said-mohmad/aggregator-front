import React from "react";
import styles from "./BackgroundBlock.module.css";

const BackgroundBlock = () => {
  return (
    <div className={styles.ForBackGround}>
      <div className={styles.about}>
        <div className={styles.info}>
          <span className={styles.companyName}>
            BUILDING <br /> SERVICE AGGREGATOR
          </span>
          <span className={styles.infoText}>
            Портал поиска строительных услуг
          </span>
        </div>
        <button className={styles.aboutButton}>УЗНАТЬ ПОДРОБНОСТИ</button>
      </div>
    </div>
  );
};

export default BackgroundBlock;
