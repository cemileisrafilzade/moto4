import "../sass/layout/_carDetailCredit.scss";

import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const CarDetailCredit = ({ closeBtn }) => {
  const [activeStep, setActiveStep] = useState("calc");

  return (
    <div className="credit__container">
      {activeStep === "calc" && (
        <div className="credit__container__stepOne">
          <div className="credit__container__stepOne__header">
            <div className="credit__container__stepOne__header__title">
              Hissə-hissə al
            </div>
            <button
              onClick={() => closeBtn()}
              className="credit__container__stepOne__header__btn"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="credit__container__stepOne__carTitle">
            Mercedes-Benz, S 500, 2021 il, 5.5 L, 110 000 km
          </div>
          <div className="credit__container__stepOne__calc">
            <div className="credit__container__stepOne__calc__item"></div>
            <div className="credit__container__stepOne__calc__item"></div>
          </div>
          <button
            className="credit__container__stepOne__btn"
            onClick={() => setActiveStep("form")}
          >
            Davam et
          </button>
          <div className="credit__container__stepOne__note">
            İlkin tələb olunan vəsaitə komissiya, sığorta və s. xərclər
            daxildir.
          </div>
        </div>
      )}
      {activeStep === "form" && (
        <div className="credit__container__stepTwo">
          <div className="credit__container__stepTwo__header">
            <button
              className="credit__container__stepTwo__header__prevBtn"
              onClick={() => setActiveStep("calc")}
            >
              <ArrowBackIosIcon />
            </button>
            <div className="credit__container__stepTwo__header__title">
              Şəxsi məlumatlar
            </div>
            <button
              onClick={() => closeBtn()}
              className="credit__container__stepTwo__header__closeBtn"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="credit__container__stepTwo__form"></div>
          <button
            className="credit__container__stepTwo__btn"
            onClick={() => setActiveStep("form")}
          >
            Davam et
          </button>
          <div className="credit__container__stepTwo__note">
            Kredit tarixçəm haqqında məlumatlarımın Azərbaycan Kredit Bürosundan
            alınmasına və ASAN Finans/E-GOV sistemi vasitəsilə şəxsiyyəti təsdiq
            edən sənəd, iş yeri, əmək haqqı və s. məlumatlarımın City Finance
            BOKT MMC-yə təqdim edilməsinə razılıq veririəm.
          </div>
          <div className="credit__container__stepTwo__note">
            “Davam et” düyməsini sıxmaqla məlumatlarınızın City Finance
            tərəfindən emal olunmasına razılıq veririsiniz.
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetailCredit;
