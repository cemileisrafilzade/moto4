import React, { useState } from "react";
import "../../sass/pages/_home.scss";

import FilterTab from "../../components/FilterTab/FilterTab";
import OptionInputMultiple from "../../components/OptionInputMultiple/OptionInputMultiple";
import OptionInputSingle from "../../components/OptionInputSingle/OptionInputSingle";
import HomeCars from "../../scenes/HomeCars";

import {
  filterTabOne,
  filterTabTwo,
  brandOptions,
  modelOptions,
  banOptions,
  cityOptions,
  yearOptions,
} from "../../constants";

export const INITIAL_DATA = {
  tabOne: "hamısı",
  tabTwo: "hamısı",
  brand: "",
  model: "",
  banType: "",
  city: "",
  minPrice: null,
  maxPrice: null,
  currency: "AZN",
  minYear: null,
  maxYear: null,
  code: "",
};

function Homepage() {
  const [data, setData] = useState(INITIAL_DATA);
  const [tabOneDefaultValue, setTabOneDefaultValue] = useState("all");
  const [tabTwoDefaultValue, setTwoOneDefaultValue] = useState("all");

  const handleChange = ({ target }) => {
    setData((prevValues) => ({
      ...prevValues,
      [target.name]: target.value,
    }));
  };

  const handleSearch = () => {
    console.log(data);
    setData(INITIAL_DATA);
    setTabOneDefaultValue("all");
    setTwoOneDefaultValue("all");
  };

  const handleClear = () => {
    setData(INITIAL_DATA);
    setTabOneDefaultValue("all");
    setTwoOneDefaultValue("all");
  };

  return (
    <main className="home">
      <div className="home__hero">
        <div className="home__hero__content">
          <div className="home__hero__content__firstLine">
            <FilterTab
              handleChange={handleChange}
              tabs={filterTabOne}
              tabDefaultValue={tabOneDefaultValue}
              setTabDefaultValue={setTabOneDefaultValue}
              tabKey="tabOne"
            />
            <FilterTab
              handleChange={handleChange}
              tabs={filterTabTwo}
              tabDefaultValue={tabTwoDefaultValue}
              setTabDefaultValue={setTwoOneDefaultValue}
              tabKey="tabTwo"
            />
          </div>
          <div className="home__hero__content__secondLine">
            <OptionInputSingle options={brandOptions} holder="Marka" />
            <OptionInputMultiple options={modelOptions} holder="Model" />
            <OptionInputMultiple options={banOptions} holder="Ban növü" />
            <OptionInputSingle options={cityOptions} holder="Şəhər" />
          </div>
          <div className="home__hero__content__thirdLine">
            <div className="home__hero__content__thirdLine__amount">
              <input
                type="number"
                placeholder="Qiymət,Min"
                className="amount__min"
              />
              <input type="number" placeholder="Max" className="amount__max" />
            </div>
            <select className="home__hero__content__thirdLine__currency">
              <option value="AZN">AZN</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
            <div className="home__hero__content__thirdLine__year">
              <OptionInputSingle options={yearOptions} holder="İl,Min" isYear />
              <OptionInputSingle options={yearOptions} holder="Max" isYear />
            </div>
            <input
              type="text"
              placeholder="Elan kodu"
              className="home__hero__content__thirdLine__code"
            />
          </div>
          <div className="home__hero__content__fourthLine">
            <button
              className="home__hero__content__fourthLine__clearBtn"
              onClick={handleClear}
            >
              Təmizlə &#10005;
            </button>
            <button className="home__hero__content__fourthLine__moreFilter">
              Daha çox filtr
            </button>
            <button
              className="home__hero__content__fourthLine__search"
              onClick={handleSearch}
            >
              Axtar
            </button>
          </div>
        </div>
      </div>
      <HomeCars />
    </main>
  );
}

export default Homepage;
