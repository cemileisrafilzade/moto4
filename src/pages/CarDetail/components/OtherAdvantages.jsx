import "../../../sass/components/_otherAdvantages.scss";

const OtherAdvantages = ({ product }) => {
  return (
    <div className="advantages">
      <div className="advantages__title">Digər üstünlükləri</div>
      <div className="advantages__content">
        {product.otherAdvantages.map((supply, index) => (
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
