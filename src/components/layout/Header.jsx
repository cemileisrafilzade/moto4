import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import PrimaryBtn from "../buttons/PrimaryBtn";
import { Icon } from "@fluentui/react";

function Header() {
  const [activePage, setActivePage] = useState("/");

  const location = useLocation();

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <div className={styles.header}>
      <img src={logo} alt="" />
      <div className={styles.nav}>
        <Link className={activePage === "/" ? styles.active : ""} to="/">
          Ana səhifə
        </Link>
        <Link
          className={activePage === "/elan" ? styles.active : ""}
          to="/elan"
        >
          Elanlar
        </Link>
        <Link className={activePage === "/faq" ? styles.active : ""} to="/faq">
          FAQ
        </Link>
      </div>
      <div className={styles.btns}>
        <PrimaryBtn
          text="Yeni Elan"
          newPageTitle="new-promotion"
          icon={<Icon iconName="Add" />}
        />
        <PrimaryBtn text="Yeni Elan" icon={<Icon iconName="CirclePlus" />} />
      </div>
    </div>
  );
}

export default Header;
