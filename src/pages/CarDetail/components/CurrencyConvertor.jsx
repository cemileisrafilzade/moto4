import "../../../sass/components/_currencyConvertor.scss";

import { useState } from "react";

import { useParams } from "react-router-dom";
import { products } from "../../../mockData/products";

import CarDetailCredit from "../../../scenes/CarDetailCredit";

const CurrencyConvertor = () => {
  const [isCreditOpen, setIsCreditOpen] = useState(false);

  const params = useParams();

  const product = products.filter(
    (product) => product.id === Number(params.id)
  );

  const handleCreditOpen = () => {
    setIsCreditOpen((prevValue) => !prevValue);
  };

  return (
    <div className="currency__convertor">
      <div className="currency__convertor__amount">200 000 AZN</div>
      <div className="currency__convertor__options">
        <div className="currency__convertor__options__cases">
          {product[0].leasing && (
            <div className="currency__convertor__options__cases__item leasing">
              <img src="/carDetail/currency/leasing.png" alt="leasing" />
            </div>
          )}
          {product[0].credit && (
            <div className="currency__convertor__options__cases__item barter">
              <img src="/carDetail/currency/barter.png" alt="barter" />
            </div>
          )}
          {product[0].barter && (
            <div className="currency__convertor__options__cases__item credit">
              <img src="/carDetail/currency/credit.png" alt="credit" />
            </div>
          )}
        </div>
        <div className="currency__convertor__options__text">
          Valyuta çevirici
        </div>
      </div>
      <div className="currency__convertor__justice">
        <div className="currency__convertor__justice__rank">
          <div className="currency__convertor__justice__rank__item filled" />
          <div className="currency__convertor__justice__rank__item filled" />
          <div className="currency__convertor__justice__rank__item filled" />
          <div className="currency__convertor__justice__rank__item" />
          <div className="currency__convertor__justice__rank__item" />
        </div>
        <div className="currency__convertor__justice__text">
          Ədalətli qiymət
        </div>
      </div>
      <button className="currency__convertor__btn" onClick={handleCreditOpen}>
        <img src="/carDetail/currency/credit.png" alt="credit" />
        Hissə-hissə al
      </button>
      {isCreditOpen && (
        <div className="currency__convertor__credit">
          <CarDetailCredit closeBtn={setIsCreditOpen} />
        </div>
      )}
    </div>
  );
};

export default CurrencyConvertor;
