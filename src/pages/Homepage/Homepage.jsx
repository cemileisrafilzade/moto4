import React from "react";
import "../../sass/pages/_home.scss";

import FilterTab from "../../components/FilterTab/FilterTab";
import HomeOptionInput from "../../components/OptionInputSingle/OptionInputSingle";
import OptionInputMultiple from "../../components/OptionInputMultiple/OptionInputMultiple";

const filterTabOne = {
  all: "hamısı",
  new: "yeni",
  old: "sürülmüş",
};

const filterTabTwo = {
  all: "hamısı",
  credit: "kredit",
  barter: "barter",
};

const options1 = [
  { title: "BMW" },
  { title: "Mercedes-Benz" },
  { title: "Toyota" },
];

const options2 = [{ title: "1-series" }, { title: "116" }, { title: "118" }];

const options3 = [{ title: "Pikap" }, { title: "Sedan" }];

const options4 = [{ title: "Bakı" }, { title: "Gəncə" }, { title: "Xankəndi" }];

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
            <HomeOptionInput options={options1} holder="Marka" />
            <OptionInputMultiple options={options2} holder="Model" />
            <OptionInputMultiple options={options3} holder="Ban növü" />
            <HomeOptionInput options={options4} holder="Şəhər" />
          </div>
          <div className="home__hero__content__thirdLine"></div>
        </div>
      </div>
    </main>
  );
}

export default Homepage;
