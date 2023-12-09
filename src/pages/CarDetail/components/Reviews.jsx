import "../../../sass/components/_reviews.scss";

import { products } from "../../../mockData/products";
import { useParams } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

const Reviews = () => {
  const params = useParams();

  const product = products.filter(
    (product) => product.id === Number(params.id)
  );

  return (
    <div className="reviews">
      <div className="reviews__title">Rəylər</div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper reviews__content"
      >
        {product[0].reviews.map((review) => (
          <SwiperSlide className="reviews__content__item">
            <div key={review.id} className="reviews__content__item__header">
              <img src={`/carDetail/person${review.id}.jpg`} alt="person" />
              <span className="reviews__content__item__header__name">
                {review.person}
              </span>
            </div>
            <div className="reviews__content__item__body">{review.note}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
