import React from "react";
import styles from "./styles.module.scss";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { Icon } from "@fluentui/react";
import SearchBar from "./components/SearchBar";
function SearchResult() {
  return (
    <div className={styles.container}>
      <Breadcrumbs
        className={styles.nav}
        separator={<Icon iconName="ChevronRightMed" />}
        aria-label="breadcrumb"
      >
        <Link to="/">Ana səhifə</Link>
        <Link to='/more-filters'>Axtarışım</Link>
        <Link>2000 nəticə</Link>
      </Breadcrumbs>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <SearchBar />
        </div>
        <div className={styles.rightSide}>productssss</div>
      </div>
    </div>
  );
}

export default SearchResult;
