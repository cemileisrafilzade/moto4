import React from "react";
import "../../sass/components/_filterTab.scss";

const FilterTab = () => {
  return (
    <div className="filter__tab">
      <div className="filter__tab__item active">Hamısı</div>
      <div className="filter__tab__item">Yeni</div>
      <div className="filter__tab__item">Sürülmüş</div>
    </div>
  );
};

export default FilterTab;
