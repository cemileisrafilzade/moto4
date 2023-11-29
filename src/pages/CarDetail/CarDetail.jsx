import React, { useState } from "react";

import "../../sass/pages/_carDetail.scss";

import CarSwipper from "../../scenes/CarSwipper";

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
            <CarSwipper />
            <button
              className="car__detail__modal__closeBtn"
              onClick={handleOpenSlider}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarDetail;
