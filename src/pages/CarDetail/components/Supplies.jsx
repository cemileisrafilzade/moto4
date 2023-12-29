import "../../../sass/components/_supplies.scss";

const Supplies = ({ product }) => {
  return (
    <div className="supplies">
      <div className="supplies__title">Avtomobil təchizatları</div>
      <div className="supplies__content">
        {product.supplies.map((supply, index) => (
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
