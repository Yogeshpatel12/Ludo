import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const WinningSlider = () => {
  const settings = {
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
    className: "mySwiper",
    loop:true
  }

  return (
    <>
      <div className="hidden lg:block w-full">
        <Swiper {...settings} slidesPerView={3}        >
          {slideData.map((data, idx) => (
            <SwiperSlide key={idx} className='text-center font-semibold text-lg text-white'>{data}</SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="block lg:hidden w-full">
        <Swiper  {...settings} slidesPerView={1}        >
          {slideData.map((data, idx) => (
            <SwiperSlide key={idx} className='text-left font-semibold text-lg text-white'>{data}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default WinningSlider


const slideData = [
  "Sumit won 280",
  "Amit won 200",
  "Sunil won 310",
  "Lokesh won 400",
  "Ravi won 720",
  "Vishal won 500",
  "Aman won 280",
  "Daksh won 340",
  "Kuldeep won 180",
]