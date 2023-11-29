import React from "react";

import "../../../sass/components/_pictures.scss";

const Pictures = () => {
  return (
    <div className="pictures">
      <div className="pictures__title">Şəkillər</div>
      <div className="pictures__content">
        <button className="pictures__content__item">
          <img
            src="/promotion/car_front.png"
            alt="car__front"
            className="pictures__content__item__img"
          />
          <p className="pictures__content__item__text">Ön görünüş</p>
        </button>
        <button className="pictures__content__item">
          <img
            src="/promotion/car_back.png"
            alt="car__front"
            className="pictures__content__item__img"
          />
          <p className="pictures__content__item__text">Arxa görünüş</p>
        </button>
        <button className="pictures__content__item">
          <img
            src="/promotion/car_panel.jpeg"
            alt="car__front"
            className="pictures__content__item__img"
          />
          <p className="pictures__content__item__text">Ön panel</p>
        </button>
        <button className="pictures__content__item extra">
          <img
            src="/promotion/extra.png"
            alt="car__front"
            className="pictures__content__item__extraImg"
          />
          <p className="pictures__content__item__text">Şəkil əlavə et</p>
        </button>
      </div>
      <div className="pictures__notes">
        <ul className="pictures__notes__list">
          <li className="pictures__notes__list__item">
            Minimum – 3 şəkil (ön, arxa və bütöv ön panelin görüntüsü
            mütləqdir).
          </li>
          <li className="pictures__notes__list__item">
            Şəkillər Azərbaycan Respublikasının ərazisində çəkilməlidir.
          </li>
          <li className="pictures__notes__list__item">
            Maksimum 20 şəkil yerləşdirmək mümkündür.
          </li>
          <li className="pictures__notes__list__item">
            Avtosalonda çəkilmiş şəkillər qeydiyyatdan keçmiş avtosalonun
            hesabından уerləşdirilməlidir.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pictures;
