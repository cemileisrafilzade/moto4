import React, { useState } from "react";
import "../../sass/components/_filterTab.scss";

const FilterTab = ({ filterTab }) => {
  const [selectedId, setSelectedId] = useState("all");

  const [key1, key2, key3] = Object.keys(filterTab);
  const [value1, value2, value3] = Object.values(filterTab);

  const handleActiveItem = (e) => {
    setSelectedId(e.target.id);
  };

  return (
    <div className="filter__tab">
      <div
        className={`filter__tab__item ${selectedId === key1 && "active"}`}
        id={key1}
        onClick={(e) => handleActiveItem(e)}
      >
        {value1}
      </div>
      <div
        className={`filter__tab__item ${selectedId === key2 && "active"}`}
        id={key2}
        onClick={(e) => handleActiveItem(e)}
      >
        {value2}
      </div>
      <div
        className={`filter__tab__item ${selectedId === key3 && "active"}`}
        id={key3}
        onClick={(e) => handleActiveItem(e)}
      >
        {value3}
      </div>
    </div>
  );
};

export default FilterTab;
