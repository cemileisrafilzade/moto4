import React from "react";
import styles from "./styles.module.scss";
import { Breadcrumbs, Pagination } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@fluentui/react";
import SearchBar from "./components/SearchBar";
import { products } from "../../mockData/products";
import ProductCart from "../../components/productCard/ProductCart";
import OrderFilter from "../../components/orderFilter/OrderFilter";
import notFound from "../../assets/Unhappy Result.svg";
function SearchResult() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <Breadcrumbs
        className={styles.nav}
        separator={<Icon iconName="ChevronRightMed" />}
        aria-label="breadcrumb"
      >
        <Link to="/">Ana səhifə</Link>
        <Link to="/more-filters">Axtarışım</Link>
        <Link>2000 nəticə</Link>
      </Breadcrumbs>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <SearchBar />
        </div>
        <div className={styles.rightSide}>
          <div className={styles.dflex}>
            <h1>Mercedes-Benz, S 500</h1>
            <OrderFilter title="Sırala" />
          </div>
          <div className={styles.products}>
            {products.length ? (
              products.map((product) => (
                <ProductCart key={product.id} product={product} />
              ))
            ) : (
              <div className={styles.notFound}>
                <img src={notFound} alt="" />
                {/* <Icon iconName="ZoomOut" /> */}
                <h1>Axtarış nəticəsi tapılmadı</h1>
                <button onClick={() => navigate("/")}>
                  Ana səhifəyə qayıt
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Pagination count={10} shape="rounded" />
    </div>
  );
}

export default SearchResult;
