import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import { Icon } from "@fluentui/react";
function Footer() {
  return (
    <div className={styles.footer}>
      <img src={logo} alt="" />
      <h3>Əlaqə</h3>
      <ul>
        <li>
          <span>
            <Icon iconName="Poi" />
          </span>{" "}
          Bakı, Azərbaycan
        </li>
        <li>
          <span>
            <Icon iconName="Mail" />
          </span>{" "}
          moto4official@gmail.com
        </li>
        <li>
          <span>
            <Icon iconName="Phone" />
          </span>{" "}
          +994 70 562 12 69
        </li>
      </ul>
      <p className={styles.copyright}>
        <span>&copy;</span> 2023 by MOTO4
      </p>
    </div>
  );
}

export default Footer;
