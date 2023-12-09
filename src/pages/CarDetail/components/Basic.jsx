import "../../../sass/components/_basic.scss";

import { products } from "../../../mockData/products";

import { useParams } from "react-router-dom";

const Basic = () => {
  const params = useParams();

  const product = products.filter(
    (product) => product.id === Number(params.id)
  );

  return (
    <div className="basic">
      <div className="basic__title">Təməl məlumatlar</div>
      <div className="basic__content">
        {product[0].basicInfo.map((item, index) => (
          <div key={index} className="basic__content__item">
            <div className="basic__content__item__key">{item.key}</div>
            <div className="basic__content__item__value">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Basic;
