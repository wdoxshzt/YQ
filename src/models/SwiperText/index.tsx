import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';

import 'swiper/css';
export const SlideNextButton= ()=> {
  const swiper = useSwiper();
  console.log(swiper, '7777');
  return (
    <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
  );
}
export const MySwiper = () => {
  return (
    <Swiper>
  <SwiperSlide>
    {({ isActive }) => (
      <div>Current slide is {isActive ? 'active' : 'not active'}</div>
    )}
  </SwiperSlide>
  <SwiperSlide>
    {({ isActive }) => (
      <div>2</div>
    )}
  </SwiperSlide>
  <SwiperSlide>
    {({ isActive }) => (
      <div>3</div>
    )}
  </SwiperSlide>
  <SwiperSlide>
    {({ isActive }) => (
      <div>4</div>
    )}
  </SwiperSlide>
  <SlideNextButton />
</Swiper>
  );
};