import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import PrimaryBtn from "../buttons/PrimaryBtn";
import { Icon } from "@fluentui/react";

const handleNew = () => {
  console.log("handledddd");
};
function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="" />
      <div className={styles.nav}>
        <Link to="/">Ana səhifə</Link>
        <Link to="/">Elanlar</Link>
        <Link to="/faq">FAQ</Link>
      </div>
      <div className={styles.btns}>
        <PrimaryBtn
          text="Yeni Elan"
          icon={<Icon iconName="Add" />}
          handleClick={handleNew}
        />
        <PrimaryBtn
          text="Yeni Elan"
          icon={<Icon iconName="Add" />}
          handleClick={handleNew}
        />
      </div>
    </div>
  );
}

export default Header;
