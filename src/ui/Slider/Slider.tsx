// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/autoplay";
import "./Slider.scss";
import { Autoplay } from "swiper/modules";

export const SimpleSlider = () => {
  return (
    <section className="section-container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 0 }}
        speed={10000}
      >
        <SwiperSlide>
          <img
            src="https://img1.russianfood.com/dycontent/images_upl/572/big_571541.jpg"
            alt="slider-picture"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.restoclub.ru/uploads/article/e/d/6/3/ed63bec6c89fca322f6cb5719e0851cb_w828_h552--big.jpg"
            alt="slider-picture"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://sladpo68.ru/components/com_jshopping/files/img_products/ekler_sliw.jpg"
            alt="slider-picture"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
