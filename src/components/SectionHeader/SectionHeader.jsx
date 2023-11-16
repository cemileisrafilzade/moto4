import React from "react";
import OrderFilter from "../orderFilter/OrderFilter";

import "../../sass/components/_sectionHeader.scss";

const SectionHeader = ({ title, filterTitle }) => {
  return (
    <div className="section__header">
      <div className="section__header__title">{title}</div>
      {filterTitle && <OrderFilter title={filterTitle} />}
    </div>
  );
};

export default SectionHeader;
