import "../../../sass/components/_supplies.scss";

import { products } from "../../../mockData/products";

import { useParams } from "react-router-dom";

const Supplies = () => {
  const params = useParams();

  const product = products.filter(
    (product) => product.id === Number(params.id)
  );

  return (
    <div className="supplies">
      <div className="supplies__title">Avtomobil təchizatları</div>
      <div className="supplies__content">
        {product[0].supplies.map((supply, index) => (
          <div key={index} className="supplies__content__item">
            <div className="supplies__content__item__value">{supply.key}</div>
            <img src="/carDetail/has.png" alt="supply" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Supplies;
