import React from "react";

import "../sass/layout/_homeCars.scss";

import { products } from "../mockData/products";
import { topBrands } from "../mockData/topBrands";
import ProductCart from "../components/productCard/ProductCart";
import SectionHeader from "../components/SectionHeader/SectionHeader";

const HomeCars = () => {
  return (
    <div className="home__cars">
      <section className="home__cars__section">
        <SectionHeader title="Statistik elanlar" filterTitle="Rating" />
        <div className="home__cars__section__content">
          {products.map((product) => {
            if (product.leasing) {
              return <ProductCart key={product.id} product={product} />;
            } else {
              return undefined;
            }
          })}
        </div>
      </section>
      <section className="home__cars__section">
        <SectionHeader title="Yeni elanlar" filterTitle="Tarix" />
        <div className="home__cars__section__content">
          {products.map((product) => {
            return <ProductCart key={product.id} product={product} />;
          })}
        </div>
      </section>
      <section className="home__cars__section">
        <SectionHeader title="Top Markalar" />
        <div className="home__cars__section__topBrands">
          {topBrands.map((brand) => (
            <div
              key={brand.id}
              className="home__cars__section__topBrands__item"
            >
              <img
                src={brand.img}
                alt={brand.title}
                className="home__cars__section__topBrands__item__img"
              />
              <div className="home__cars__section__topBrands__item__title">
                {brand.title}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="home__cars__section">
        <SectionHeader title="Tövsiyə olunanlar" filterTitle="Sırala" />
        <div className="home__cars__section__content">
          {products.map((product) => {
            return <ProductCart key={product.id} product={product} />;
          })}
        </div>
      </section>
      <section className="home__cars__section">
        <SectionHeader title="Elanlar" filterTitle="Sırala" />
        <div className="home__cars__section__content">
          {products.map((product) => {
            return <ProductCart key={product.id} product={product} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default HomeCars;
