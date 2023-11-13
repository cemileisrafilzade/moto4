import React from "react";
import styles from "./styles.module.scss";
function PrimaryBtn({ text, icon, handleClick }) {
  return (
    <button className={styles.primary} onClick={handleClick}>
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
}

export default PrimaryBtn;
