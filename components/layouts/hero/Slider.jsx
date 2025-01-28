"use client"
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css"
const Slider = () => {
    return (
        <section className="slider-container">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ type: "bullets", clickable: true }}
                loop={true}
                modules={[Autoplay, Pagination]}

            >
                <SwiperSlide>
                    <div className="bg-gradient-green-to-darkblue-color text-white w-full px-8 rounded-2xl flex flex-col">
                        <div className="flex flex-col md:flex-row w-[80%] mx-auto md:justify-between mt-[5%] md:mb-8">
                            <p className="text-[24px] md:text-[36px] text-right">
                                پرسشنامه شخصیتی نئو
                            </p>
                            <p className="text-[24px] md:text-[36px] text-left">
                                NEO Personality Inventory (NEO-PI-R)
                            </p>
                        </div>
                        <div className="flex flex-col justify-center md:flex-row md:justify-around">
                            <ul className="text-right list-disc">
                                <h3 className="text-[20px] md:text-[32px] py-2 md:py-4 text-right">
                                    ویژگی‌های اختصاصی :
                                </h3>
                                <li className="text-[1rem] md:text-[24px]">
                                    جدول نمرات و نمودار برای ۵ مقیاس اصلی و مقیاس‌های فرعی
                                </li>
                                <li className="text-[1rem] md:text-[24px]">
                                    ۱۴ صفحه گزارش تفسیری از مقیاس‌های اصلی و فرعی همراه با شیوه‌های شخصیتی
                                </li>
                                <li className="text-[1rem] md:text-[24px]">                            به روز آوری نمره‌های آزمون
                                </li>
                                <li className="text-[1rem] md:text-[24px]">
                                    دسته بندی آزمودنیها بر اساس سطوح نمرات ۵ عامل
                                </li>
                                <li className="text-[1rem] md:text-[24px]">
                                    جدول توافق
                                </li>
                            </ul>
                            <div>
                                <img src="/img/soft logo.png" alt="logo" className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] mx-auto" />
                            </div>

                        </div>
                        <div className="flex justify-center md:justify-end w-full md:py-16">
                            <div className="flex flex-col text-base md:text-[24px] items-center">
                                جهت خرید و یا اطلاعات بیشتر کلیک کنید
                                <button className="w-[150px] md:w-[250px] rounded-xl px-4 py-3 my-4 text-[#000] bg-white">
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

export default Slider;
