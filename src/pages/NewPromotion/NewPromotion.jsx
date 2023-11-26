import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Type from "./components/Type";
import Room from "./components/Room";
import Price from "./components/Price";
import MoreOptions from "./components/MoreOptions";
import Colors from "./components/Colors";
import CarSupply from "./components/CarSupply";
import Others from "./components/Others";
import Comment from "./components/Comment";
import Pictures from "./components/Pictures";
import Contact from "./components/Contact";

import { useNavigate } from "react-router-dom";

import "../../sass/pages/_newPromotion.scss";

const NewPromotion = () => {
  const navigate = useNavigate();

  return (
    <main className="new__promotion">
      <div className="new__promotion__titles">
        <div className="new__promotion__titles__switch">
          <button
            className="new__promotion__titles__switch__btn"
            onClick={() => navigate("/")}
          >
            Ana səhifə
          </button>
          <ArrowForwardIosIcon className="new__promotion__titles__switch__icon" />
          <button className="new__promotion__titles__switch__btn">
            Elan yerləşdir
          </button>
        </div>
        <div className="new__promotion__titles__main">Elan yerləşdir</div>
      </div>
      <div className="new__promotion__content">
        <Type />
        <Room />
        <Price />
        <MoreOptions />
        <div className="new__promotion__content__divider" />
        <Colors />
        <CarSupply />
        <Others />
        <div className="new__promotion__content__divider" />
        <Comment />
        <Pictures />
        <Contact />
        <div className="new__promotion__content__divider" />
        <button className="new__promotion__content__btn">Elan yerləşdir</button>
        <p className="new__promotion__content__text">
          * olan qırmızı xanaları doldurmaq mütləqdir.
        </p>
      </div>
    </main>
  );
};

export default NewPromotion;
