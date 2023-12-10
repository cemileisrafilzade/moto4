import React from "react";
import styles from "./style.module.scss";
import OrderFilter from "../../components/orderFilter/OrderFilter";
import { products } from "../../mockData/products";
import ProductCart from "../../components/productCard/ProductCart";
import { Pagination } from "@mui/material";
import { Icon } from "@fluentui/react";

function Advertisement() {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h1>Statistik elanlar</h1>
        <a href="">
          Hamısına bax{" "}
          <span>
            <Icon iconName="ChromeBackMirrored" />
          </span>
        </a>
        {/* <OrderFilter title="Rating" /> */}
      </div>

      <div className={styles.products}>
        {products?.map((item) => (
          <ProductCart key={item.id} product={item} />
        ))}
        {products?.map((item) => (
          <ProductCart key={item.id} product={item} />
        ))}
      </div>
      {/* //////////////////////////// */}
      <div className={styles.titleWrapper}>
        <h1>Yeni elanlar</h1>
        <a href="">
          Hamısına bax{" "}
          <span>
            <Icon iconName="ChromeBackMirrored" />
          </span>
        </a>

        {/* <OrderFilter title="Tarix" /> */}
      </div>

      <div className={styles.products}>
        {products?.map((item) => (
          <ProductCart key={item.id} product={item} />
        ))}
        {products?.map((item) => (
          <ProductCart key={item.id} product={item} />
        ))}
      </div>

      {/* //////////////////////////// */}
      <div className={styles.titleWrapper}>
        <h1>Salon elanları</h1>
        <OrderFilter title="Sırala" />
      </div>

      <div className={styles.products}>
        {products?.map((item) => (
          <ProductCart key={item.id} product={item} />
        ))}
      </div>

      {/* //////////////////////////// */}
      <div className={styles.titleWrapper}>
        <h1>Tövsiyə olunanlar</h1>
        <OrderFilter title="Sırala" />
      </div>

      <div className={styles.products}>
        {products?.map((item) => (
          <ProductCart key={item.id} product={item} />
        ))}
        {products?.map((item) => (
          <ProductCart key={item.id} product={item} />
        ))}
      </div>

      <Pagination count={10} shape="rounded" />
    </div>
  );
}

export default Advertisement;
