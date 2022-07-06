import React from 'react';
import pic1 from '../../assest/expart-1.jpeg'
import pic2 from '../../assest/expart-2.jpg'
import pic3 from '../../assest/expart-3.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
const Testomonial = () => {
    return (
        <div className="max-w-screen h-screen lg:px-40 m-12">
            <div className="flex items-center mt-44">
                <div>
                    <h1 className="text-2xl font-bold">OUR TESTIMONIALS</h1>
                    <div>
                        <progress class="progress w-56"></progress>
                    </div>
                </div>
            </div>
            <Swiper
                className="mt-32 gird grid-cols-1 gap-4 lg:gap-0"
                modules={[Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="w-48">
                        <img src={pic1} alt="" />
                    </div>
                    <h1 className="text-black font-bold">Md. Danish Ansari</h1>
                    <p className="text-sm text-muted ">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-48">
                        <img src={pic2} alt="" />
                    </div>
                    <h1 className="text-black font-bold">Md. Danish Ansari</h1>
                    <p className="text-sm text-muted ">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-48">
                        <img src={pic3} alt="" />
                    </div>
                    <h1 className="text-black font-bold">Md. Danish Ansari</h1>
                    <p className="text-sm text-muted ">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-48">
                        <img src="https://img.guess.com/image/upload/q_auto,f_auto/v1/NA/Asset/North%20America/E-Commerce/Guess/Bug%20Number/7382/G_Site_Home_ContentCenter_June_7382_03" alt="" />
                    </div>
                    <h1 className="text-black font-bold">Md. Danish Ansari</h1>
                    <p className="text-sm text-muted ">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-48">
                        <img src="https://st.depositphotos.com/1144472/2003/i/600/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg" alt="" />
                    </div>
                    <h1 className="text-black font-bold">Md. Danish Ansari</h1>
                    <p className="text-sm text-muted ">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testomonial;