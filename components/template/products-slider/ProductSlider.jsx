"use client"
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../choice/Choice.css"

const ProductSlider = () => {
    return (
        <section className="products-slider-container py-8 cursor-grab">
            <div className="title_choice flex justify-center items-center py-4">
                <h1 className="text-[30px] md:text-[36px] text-[#303030]">محصولات</h1>
            </div>

            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{ delay: 3000 }}
                loop={true}
                modules={[Autoplay, Pagination]}
                breakpoints={
                    {
                        320: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }
                }

            >
                <SwiperSlide>
                    <div className="bg-gradient-green-to-darkblue-color text-white text-center w-full h-[370px] px-2 md:px-8 py-8 gap-8 rounded-2xl flex flex-col justify-center items-center">
                        <img className="w-[120px] max-h-[150px] mx-auto" src="/img/neo.jpg" alt="NEO Personality Inventory" />
                        <div className="flex justify-center w-full">
                            <div className="flex flex-col text-base md:text-[24px] items-center">
                                <h2>
                                    پرسشنامه شخصیتی نئو
                                </h2>
                                <h3>
                                    NEO Personality Inventory (NEO-PI-R)
                                </h3>
                                <button className="w-[150px] lg:w-[250px] rounded-xl px-4 py-3 my-4 text-[#000] bg-white">
                                    جزئیات بیشتر
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gradient-green-to-darkblue-color text-white text-center w-full h-[370px] px-2 md:px-8 py-8 gap-8 rounded-2xl flex flex-col justify-center items-center">
                        <img className="w-[120px] max-h-[150px] mx-auto" src="/img/16 Personality Factors (16PF).jpg" alt="NEO Personality Inventory" />
                        <div className="flex justify-center w-full">
                            <div className="flex flex-col text-base md:text-[24px] items-center">
                                <h2>
                                    پرسشنامه 16 عاملی شخصیت
                                </h2>
                                <h3>
                                    16 Personality Factors (16PF)
                                </h3>
                                <button className="w-[150px] lg:w-[250px] rounded-xl px-4 py-3 my-4 text-[#000] bg-white">
                                    جزئیات بیشتر
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gradient-green-to-darkblue-color text-white text-center w-full h-[370px] px-2 md:px-8 py-8 gap-8 rounded-2xl flex flex-col justify-center items-center">
                        <img className="w-[120px] max-h-[150px] mx-auto" src="/img/Clinical Analysis Questionnaire (CAQ).jpg" alt="NEO Personality Inventory" />
                        <div className="flex justify-center w-full">
                            <div className="flex flex-col text-base md:text-[24px] items-center">
                                <h2>
                                    پرسشنامه تحلیل بالینی
                                </h2>
                                <h3>
                                    Clinical Analysis Questionnaire (CAQ)
                                </h3>
                                <button className="w-[150px] lg:w-[250px] rounded-xl px-4 py-3 my-4 text-[#000] bg-white">
                                    جزئیات بیشتر
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gradient-green-to-darkblue-color text-white text-center   h-[370px] px-2 md:px-8 py-8 gap-8 rounded-2xl flex flex-col justify-center items-center">
                        <img className="w-[120px] max-h-[150px] mx-auto" src="/img/Clinical Analysis Questionnaire (CAQ).jpg" alt="NEO Personality Inventory" />
                        <div className="flex justify-center w-full">
                            <div className="flex flex-col text-base md:text-[24px] items-center">
                                <h2>
                                    پرسشنامه تحلیل بالینی
                                </h2>
                                <h3>
                                    Clinical Analysis Questionnaire (CAQ)
                                </h3>
                                <button className="w-[150px] lg:w-[250px] rounded-xl px-4 py-3 my-4 text-[#000] bg-white">
                                    جزئیات بیشتر
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default ProductSlider;