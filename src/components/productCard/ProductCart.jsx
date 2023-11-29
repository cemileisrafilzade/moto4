import React from "react";
import styles from "./style.module.scss";
import { Icon } from "@fluentui/react";

import { useNavigate } from "react-router-dom";

function ProductCart({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.cardWrapper}
      onClick={() => navigate(`/auto/${product.id}`)}
    >
      <div className={styles.top}>
        <div className={styles.btns}>
          <ul>
            {product.leasing && (
              <li style={{ backgroundColor: "#620985" }}>
                <Icon iconName="Financial" />
              </li>
            )}
            {product.barter && (
              <li style={{ backgroundColor: "#DC8E00" }}>
                <Icon iconName="RepeatAll" />
              </li>
            )}
            {product.credit && (
              <li style={{ backgroundColor: "#00C600" }}>
                <Icon iconName="CalculatorPercentage" />
              </li>
            )}
          </ul>
          <Icon className={styles.heart} iconName="HeartFill" />
        </div>
        <img src={product.img} alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.header}>
          <h1>
            {product.price} <span>{product.currency}</span>
          </h1>
          {product.salon && <button>Salon</button>}
        </div>
        <p>{product.name}</p>

        <ul>
          <li>{product.year}</li>
          <li className={styles.border}>{product.capacity}</li>
          <li>{product.distance}</li>
        </ul>
        <ul className={styles.dateInfo}>
          <li>
            <Icon iconName="Poi" />
            {product.location}
          </li>
          <li>
            <Icon iconName="Clock" />
            {product.date}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductCart;
