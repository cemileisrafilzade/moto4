import React from "react";
import styles from "./style.module.scss";
import OrderFilter from "../../components/orderFilter/OrderFilter";
import { products } from "../../mockData/products";
import ProductCart from "../../components/productCard/ProductCart";
function Advertisement() {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h1>Statistik elanlar</h1>
        <OrderFilter title="Rating" />
      </div>

      <div className={styles.products}>
        {products?.map((item) => (
          <ProductCart product={item} />
        ))}
          {products?.map((item) => (
          <ProductCart product={item} />
        ))}
      </div>
{/* //////////////////////////// */}
<div className={styles.titleWrapper}>
        <h1>Yeni elanlar</h1>
        <OrderFilter title="Tarix" />
      </div>

      <div className={styles.products}>
        {products?.map((item) => (
          <ProductCart product={item} />
        ))}
          {products?.map((item) => (
          <ProductCart product={item} />
        ))}
      </div>







    </div>
  );
}

export default Advertisement;
