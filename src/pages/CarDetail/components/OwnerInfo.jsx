import "../../../sass/components/_ownerInfo.scss";

const OwnerInfo = () => {
  return (
    <div className="owner__info">
      <div className="owner__info__detail">
        <img
          src="/carDetail/owner.png"
          alt="owner"
          className="owner__info__detail__img"
        />
        <div className="owner__info__detail__content">
          <div className="owner__info__detail__content__name">
            Vüqar Əhmədov
          </div>
          <div className="owner__info__detail__content__status">Dealer</div>
          <div className="owner__info__detail__content__city">Bakı</div>
        </div>
      </div>
      <div className="owner__info__rating">
        <img src="/carDetail/filled.png" alt="filled" />
        <img src="/carDetail/filled.png" alt="filled" />
        <img src="/carDetail/filled.png" alt="filled" />
        <img src="/carDetail/filled.png" alt="filled" />
        <img src="/carDetail/empty.png" alt="empty" />
      </div>
      <div className="owner__info__btn">
        <img src="/carDetail/phone.png" alt="phone" />
        <span>(050) 555 6* **</span>
      </div>
    </div>
  );
};

export default OwnerInfo;
