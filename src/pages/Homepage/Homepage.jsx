import React from "react";
import "../../sass/pages/_home.scss";

import FilterTab from "../../components/FilterTab/FilterTab";

function Homepage() {
  return (
    <main className="home">
      <div className="home__hero">
        <div className="home__hero__content">
          <FilterTab />
        </div>
      </div>
    </main>
  );
}

export default Homepage;
