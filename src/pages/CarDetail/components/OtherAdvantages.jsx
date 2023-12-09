import "../../../sass/components/_otherAdvantages.scss";

import { products } from "../../../mockData/products";

import { useParams } from "react-router-dom";

const OtherAdvantages = () => {
  const params = useParams();

  const product = products.filter(
    (product) => product.id === Number(params.id)
  );

  return (
    <div className="advantages">
      <div className="advantages__title">Digər üstünlükləri</div>
      <div className="advantages__content">
        {product[0].otherAdvantages.map((supply, index) => (
          <div key={index} className="advantages__content__item">
            <div className="advantages__content__item__value">{supply.key}</div>
            <img src="/carDetail/has.png" alt="supply" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherAdvantages;
