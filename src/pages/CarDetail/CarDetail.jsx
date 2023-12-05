import React, { useState, useEffect } from "react";

import "../../sass/pages/_carDetail.scss";

import { products } from "../../mockData/products";

import CarSwipper from "../../scenes/CarSwipper";
import ExtraInfo from "./components/ExtraInfo";
import OwnerInfo from "./components/OwnerInfo";
import CurrencyConvertor from "./components/CurrencyConvertor";
import Basic from "./components/Basic";
import Supplies from "./components/Supplies";
import OtherAdvantages from "./components/OtherAdvantages";
import Note from "./components/Note";
import AboutDealer from "./components/AboutDealer";
import Reviews from "./components/Reviews";

import ProductCart from "../../components/productCard/ProductCart";

import { carPictures } from "../../assets/index";

const CarDetail = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const handleOpenSlider = () => {
    setIsSliderOpen((prevValue) => !prevValue);
  };

  return (
    <div className="car__detail">
      <div className="car__detail__topLinks">
        <a href="/" className="car__detail__topLinks__link">
          Ana Səhifə
        </a>
        <img src="/carDetail/switch.png" alt="switch" />
        <a href="/elan" className="car__detail__topLinks__link">
          Salonlar
        </a>
        <img src="/carDetail/switch.png" alt="switch" />
        <p className="car__detail__topLinks__name">Mercedes-Benz</p>
      </div>
      <div className="car__detail__general">
        <div className="car__detail__general__header">
          <div className="car__detail__general__header__info">
            Mercedes-Benz, S 500, 2021 il, 5.5 L, 110 000 km
          </div>
          <div className="car__detail__general__header__links">
            <img src="/carDetail/heart.png" alt="heart" />
            <img src="/carDetail/balance.png" alt="balance" />
            <img src="/carDetail/shield.png" alt="shield" />
            <img src="/carDetail/upload.png" alt="upload" />
          </div>
        </div>
        <div className="car__detail__general__pictures">
          <div
            className="car__detail__general__pictures__main"
            onClick={handleOpenSlider}
          >
            <img src="/carDetail/car_main.jpg" alt="car" />
          </div>
          <div className="car__detail__general__pictures__aside">
            <div
              className="car__detail__general__pictures__aside__item"
              onClick={handleOpenSlider}
            >
              <img src="/carDetail/car2.jpg" alt="car" />
            </div>
            <div
              className="car__detail__general__pictures__aside__item"
              onClick={handleOpenSlider}
            >
              <img src="/carDetail/car3.jpg" alt="car" />
            </div>
            <div
              className="car__detail__general__pictures__aside__item"
              onClick={handleOpenSlider}
            >
              <img src="/carDetail/car4.jpg" alt="car" />
              <div className="car__detail__general__pictures__aside__item__overlay">
                <p className="car__detail__general__pictures__aside__item__overlay__text">
                  +16 şəkil
                </p>
              </div>
            </div>
          </div>
        </div>
        {isSliderOpen && (
          <div className="car__detail__modal">
            <CarSwipper images={carPictures} />
            <button
              className="car__detail__modal__closeBtn"
              onClick={handleOpenSlider}
            >
              <img src="/carDetail/close.png" alt="close" />
            </button>
          </div>
        )}
      </div>
      <div className="car__detail__additional">
        <div className="car__detail__additional__left">
          <ExtraInfo />
          <Basic />
          <Supplies />
          <OtherAdvantages />
          <Note />
          <AboutDealer />
          <Reviews />
          <div className="car__detail__additional__left__divider" />
        </div>
        <div className="car__detail__additional__right">
          <CurrencyConvertor />
          <OwnerInfo />
          <div className="car__detail__additional__right__vin">
            <div className="car__detail__additional__right__vin__key">
              VİN kod:
            </div>
            <div className="car__detail__additional__right__vin__value">
              WDD12345678901234
            </div>
          </div>
        </div>
      </div>
      <div className="car__detail__similar">
        <div className="car__detail__similar__header">
          <div className="car__detail__similar__header__title">
            Bənzər elanlar
          </div>
          <a href="/" className="car__detail__similar__header__link">
            Hamısına bax <img src="/carDetail/link.png" alt="link" />
          </a>
        </div>
        <div className="car__detail__similar__content">
          {products.map((product) => {
            return <ProductCart key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
