"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../choice/Choice.css";
import Link from "next/link";

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
        breakpoints={{
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
        }}
      >
        <SwiperSlide>
          <div className="bg-gradient-green-to-darkblue-color text-white text-center w-full h-[370px] px-2 md:px-8 py-8 gap-8 rounded-2xl flex flex-col justify-center items-center">
            <img
              className="w-[120px] max-h-[150px] mx-auto"
              src="/img/neo.jpg"
              alt="NEO Personality Inventory"
            />
            <div className="flex justify-center w-full">
              <div className="flex flex-col text-base md:text-[24px] items-center">
                <h2>پرسشنامه شخصیتی نئو</h2>
                <h3>NEO Personality Inventory (NEO-PI-R)</h3>
                <Link
                  href="/product/neo"
                  className="w-[150px] lg:w-[250px] rounded-xl px-4 py-3 my-4 text-[#000] bg-white"
                >
                  جزئیات بیشتر
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gradient-green-to-darkblue-color text-white text-center w-full h-[370px] px-2 md:px-8 py-8 gap-8 rounded-2xl flex flex-col justify-center items-center">
            <img
              className="w-[120px] h-[200px] mx-auto"
              src="/img/mmpi2.jpg"
              alt="NEO Personality Inventory"
            />
            <div className="flex justify-center w-full">
              <div className="flex flex-col text-base md:text-[24px] items-center">
                <h2>پرسشنامه شحصیتی چند وجهی مینه سوتا-2</h2>
                <h3>Minnesota Multiphasic Personality Inventory-2 (MMPI-2)</h3>
                <Link
                  href="/product/mmpi"
                  className="w-[150px] lg:w-[250px] rounded-xl px-4 py-3 my-4 text-[#000] bg-white"
                >
                  جزئیات بیشتر
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gradient-green-to-darkblue-color text-white text-center   h-[370px] px-2 md:px-8 py-8 gap-8 rounded-2xl flex flex-col justify-center items-center">
            <img
              className="w-[120px] max-h-[150px] mx-auto"
              src="/img/Clinical Analysis Questionnaire (CAQ).jpg"
              alt="NEO Personality Inventory"
            />
            <div className="flex justify-center w-full">
              <div className="flex flex-col text-base md:text-[24px] items-center">
                <h2>پرسشنامه تحلیل بالینی</h2>
                <h3>Clinical Analysis Questionnaire (CAQ)</h3>
                <Link
                  href="/product/caq"
                  className="w-[150px] lg:w-[250px] rounded-xl px-4 py-3 my-4 text-[#000] bg-white"
                >
                  جزئیات بیشتر
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gradient-green-to-darkblue-color text-white text-center   h-[370px] px-2 md:px-8 py-8 gap-8 rounded-2xl flex flex-col justify-center items-center">
            <img
              className="w-[120px] h-[100px] mx-auto"
              src="/img/mcmi.jpg"
              alt="Million Clinical Multi axial Inventory  (MCMI-III)"
            />
            <div className="flex justify-center w-full">
              <div className="flex flex-col text-base md:text-[24px] items-center">
                <h2>پرسشنامه بالینی چند محوری میلون</h2>
                <h3>Million Clinical Multi axial Inventory (MCMI-III)</h3>
                <Link
                  href="/product/mcmi"
                  className="w-[150px] lg:w-[250px] rounded-xl px-4 py-3 my-4 text-[#000] bg-white"
                >
                  جزئیات بیشتر
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="all_prouduct flex justify-center mt-12 ">
        <Link
          href="/allproduct"
          className="bg-[#19767e] text-[#fff] rounded-md px-3 py-2 text-[20px]"
        >
          همه ی محصولات
        </Link>
      </div>
    </section>
  );
};

export default ProductSlider;
