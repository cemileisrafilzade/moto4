import React from "react";
import styles from "./styles.module.scss";
import { Breadcrumbs, Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import { Icon } from "@fluentui/react";
import SearchBar from "./components/SearchBar";
import { products } from "../../mockData/products";
import ProductCart from "../../components/productCard/ProductCart";
import OrderFilter from "../../components/orderFilter/OrderFilter";
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
        <div className={styles.rightSide}>
          <div className={styles.dflex}>

<h1>Mercedes-Benz, S 500</h1>
          <OrderFilter title="Sırala"/>
          
          </div>
          <div className={styles.products}>
          {products.map(product=>(
            <ProductCart product={product}/>
            ))}
            </div>
        </div>
      </div>
      <Pagination  count={10} shape="rounded" />

    </div>
  );
}

export default SearchResult;
