import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import TestimonialCard from './TestimonialCard';

const TestimonialSlider = ({ testimonialsData }) => {
  const settings = {
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    oneWayMovement: true,
    modules: [Autoplay],
    className: "mySwiper",
    loop: true
  }

  const SlideContent = ({ slides }) => {
    return (
      <Swiper {...settings} slidesPerView={slides}>
        {testimonialsData.map(data => (
          <SwiperSlide key={data.id} className='text-center font-semibold text-lg text-white'>
            <TestimonialCard {...data} testimonial_img={data.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    )
  }

  return (
    <>
      <div className='md:hidden w-full'>
        <SlideContent slides={1} />
      </div>
      <div className='hidden md:block lg:hidden w-full'>
        <SlideContent slides={2} />
      </div>
      <div className='hidden lg:block w-full'>
        <SlideContent slides={3} />
      </div>
    </>
  )
}
export default TestimonialSlider