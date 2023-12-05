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
        <SwiperSlide className="reviews__content__item">Slide 1</SwiperSlide>
        <SwiperSlide className="reviews__content__item">Slide 2</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
