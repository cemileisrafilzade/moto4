import React from "react";
import "../../sass/pages/_home.scss";

import FilterTab from "../../components/FilterTab/FilterTab";
import OptionInputMultiple from "../../components/OptionInputMultiple/OptionInputMultiple";
import OptionInputSingle from "../../components/OptionInputSingle/OptionInputSingle";

import {
  filterTabOne,
  filterTabTwo,
  brandOptions,
  modelOptions,
  banOptions,
  cityOptions,
  yearOptions,
} from "../../constants";

function Homepage() {
  return (
    <main className="home">
      <div className="home__hero">
        <div className="home__hero__content">
          <div className="home__hero__content__firstLine">
            <FilterTab filterTab={filterTabOne} />
            <FilterTab filterTab={filterTabTwo} />
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
            <button className="home__hero__content__fourthLine__clearBtn">
              Təmizlə &#10005;
            </button>
            <button className="home__hero__content__fourthLine__moreFilter">
              Daha çox filtr
            </button>
            <button className="home__hero__content__fourthLine__search">
              Axtar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Homepage;
