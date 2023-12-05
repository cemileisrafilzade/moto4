import "../../../sass/components/_extraInfo.scss";

import { useParams } from "react-router-dom";
import { products } from "../../../mockData/products";

const ExtraInfo = () => {
  const params = useParams();

  const product = products.filter(
    (product) => product.id === Number(params.id)
  );

  return (
    <div className="extra__info">
      <div className="extra__info__updated">
        <div className="extra__info__updated__item">Elan kodu: 13356655</div>
        <div className="extra__info__updated__item">
          <img src="/carDetail/calendar.png" alt="view" />
          <p>Bugün, 11:45</p>
        </div>
        <div className="extra__info__updated__item">
          <img src="/carDetail/view.png" alt="view" />
          <p>1155</p>
        </div>
      </div>
      <div className="extra__info__table">
        {product[0].extraInfo.map((item, index) => (
          <div key={index} className="extra__info__table__item">
            <img
              src={`/carDetail/extra/${item.imgName}.png`}
              alt="gear"
              className="extra__info__table__item__img"
            />
            <div className="extra__info__table__item__content">
              <div className="extra__info__table__item__content__title">
                {item.title}
              </div>
              <div className="extra__info__table__item__content__value">
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraInfo;
