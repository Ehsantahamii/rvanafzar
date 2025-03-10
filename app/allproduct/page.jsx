import Footer from "@/components/layouts/footer/Footer";
import Link from "next/link";

const page = () => {
  return (
    <main className="all_product">
      <div className="title flex justify-between items-center  mt-10 border-b-[2px]">
        <h1 className=" text-[25px]">همه محصولات</h1>
        <Link href="/" className=" text-[#19767e]  font-bold text-[15px]">
          صفحه اصلی
        </Link>
      </div>
      <div className="content_product  w-full  mt-8">
        <div className="items flex justify-center items-center flex-wrap p-5 gap-8">
          <div className="bg-gradient-green-to-darkblue-color text-white text-center max-md:w-full w-[370px] h-[370px] px-2 md:px-8 py-8 gap-8 rounded-2xl flex flex-col justify-center items-center">
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
          <div className="bg-gradient-green-to-darkblue-color text-white text-center max-md:w-full w-[370px] h-[370px] px-2 md:px-8 py-8 gap-8 rounded-2xl flex flex-col justify-center items-center">
            <img
              className="w-[120px] h-[200px] mx-auto"
              src="/img/mmpi2.jpg"
              alt="Minnesota Multiphasic Personality Inventory-2 (MMPI-2)"
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
          <div className="bg-gradient-green-to-darkblue-color text-white text-center max-md:w-full  w-[370px] h-[370px] px-2 md:px-8 py-8 gap-8 rounded-2xl flex flex-col justify-center items-center">
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
          <div className="bg-gradient-green-to-darkblue-color text-white text-center max-md:w-full w-[370px]  h-[370px] px-2 md:px-8 py-8 gap-8 rounded-2xl flex flex-col justify-center items-center">
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
          <div className="bg-gradient-green-to-darkblue-color text-white text-center max-md:w-full w-[370px]  h-[370px] px-2 md:px-8 py-8 gap-8 rounded-2xl flex flex-col justify-center items-center">
            <img
              className="w-[120px] max-h-[150px] mx-auto"
              src="img/16 Personality Factors (16PF).jpg"
              alt="16 Personality Factors (16PF)"
            />
            <div className="flex justify-center w-full">
              <div className="flex flex-col text-base md:text-[24px] items-center">
                <h2>پرسشنامه 16 عاملی شخصیت</h2>
                <h3>16 Personality Factors (16PF)</h3>
                <Link
                  href="/product/16pf"
                  className="w-[150px] lg:w-[250px] rounded-xl px-4 py-3 my-4 text-[#000] bg-white"
                >
                  جزئیات بیشتر
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-gradient-green-to-darkblue-color text-white text-center max-md:w-full w-[370px]  h-[370px] px-2 md:px-8 py-8 gap-8 rounded-2xl flex flex-col justify-center items-center">
            <img
              className="w-[120px] max-h-[150px] mx-auto"
              src="/img/mbti1.JPG"
              alt="Myers-Briggs Type Indicator (MBTI)"
            />
            <div className="flex justify-center w-full">
              <div className="flex flex-col text-base md:text-[24px] items-center">
                <h2>تیپ نمای مایرز-بریگز</h2>
                <h3>Myers-Briggs Type Indicator (MBTI)</h3>
                <Link
                  href="/product/mbti"
                  className="w-[150px] lg:w-[250px] rounded-xl px-4 py-3 my-4 text-[#000] bg-white"
                >
                  جزئیات بیشتر
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-gradient-green-to-darkblue-color text-white text-center max-md:w-full w-[370px]  h-[370px] px-2 md:px-8 py-8 gap-8 rounded-2xl flex flex-col justify-center items-center">
            <img
              className="w-[120px] max-h-[150px] mx-auto"
              src="/img/E.Q..JPG"
              alt="Emotional Quotient Inventory (EQI)"
            />
            <div className="flex justify-center w-full">
              <div className="flex flex-col text-base md:text-[24px] items-center">
                <h2>پرسشنامه هوش هیجانی </h2>
                <h3>Emotional Quotient Inventory (EQI)</h3>
                <Link
                  href="/product/eqi"
                  className="w-[150px] lg:w-[250px] rounded-xl px-4 py-3 my-4 text-[#000] bg-white"
                >
                  جزئیات بیشتر
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-gradient-green-to-darkblue-color text-white text-center max-md:w-full w-[370px]  h-[370px] px-2 md:px-8 py-8 gap-8 rounded-2xl flex flex-col justify-center items-center">
            <img
              className="w-[120px] max-h-[150px] mx-auto"
              src="/img/kcpt.jpg"
              alt="Conner's Kiddie Continuous Performance Test (K-CPT2)"
            />
            <div className="flex justify-center w-full">
              <div className="flex flex-col text-base md:text-[24px] items-center">
                <h2>آزمون عملکرد پيوسته کانرز - فرم کودکان</h2>
                <h3>Conner's Kiddie Continuous Performance Test (K-CPT2)</h3>
                <Link
                  href="/product/kcpt"
                  className="w-[150px] lg:w-[250px] rounded-xl px-4 py-3 my-4 text-[#000] bg-white"
                >
                  جزئیات بیشتر
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-gradient-green-to-darkblue-color text-white text-center max-md:w-full w-[370px]  h-[370px] px-2 md:px-8 py-8 gap-8 rounded-2xl flex flex-col justify-center items-center">
            <img
              className="w-[120px] max-h-[150px] mx-auto"
              src="/img/cpt3.bmp"
              alt="Conner's Continuous Performance Test (CPT-3)"
            />
            <div className="flex justify-center w-full">
              <div className="flex flex-col text-base md:text-[24px] items-center">
                <h2>آزمون عملکرد پيوسته کانرز - فرم بزرگسالان</h2>
                <h3>Conner's Continuous Performance Test (CPT-3)</h3>
                <Link
                  href="/product/cpt"
                  className="w-[150px] lg:w-[250px] rounded-xl px-4 py-3 my-4 text-[#000] bg-white"
                >
                  جزئیات بیشتر
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-gradient-green-to-darkblue-color text-white text-center max-md:w-full w-[370px]  h-[370px] px-2 md:px-8 py-8 gap-8 rounded-2xl flex flex-col justify-center items-center">
            <img
              className="w-[120px] max-h-[150px] mx-auto"
              src="/img/tova2.jpg"
              alt="Test of Variables of Attention  (T.O.V.A)"
            />
            <div className="flex justify-center w-full">
              <div className="flex flex-col text-base md:text-[24px] items-center">
                <h2>آزمون متغیرهای توجه</h2>
                <h3>Test of Variables of Attention  (T.O.V.A)</h3>
                <Link
                  href="/product/tova"
                  className="w-[150px] lg:w-[250px] rounded-xl px-4 py-3 my-4 text-[#000] bg-white"
                >
                  جزئیات بیشتر
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-gradient-green-to-darkblue-color text-white text-center max-md:w-full w-[370px]  h-[370px] px-2 md:px-8 py-8 gap-8 rounded-2xl flex flex-col justify-center items-center">
            <img
              className="w-[120px] max-h-[150px] mx-auto"
              src="/img/hanoi.jpg"
              alt="Tower of Hanoi Test"
            />
            <div className="flex justify-center w-full">
              <div className="flex flex-col text-base md:text-[24px] items-center">
                <h2>آزمون برج هانوی</h2>
                <h3>Tower of Hanoi Test</h3>
                <Link
                  href="/product/hanoi"
                  className="w-[150px] lg:w-[250px] rounded-xl px-4 py-3 my-4 text-[#000] bg-white"
                >
                  جزئیات بیشتر
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="bg-gradient-green-to-darkblue-color text-white text-center max-md:w-full w-[370px]  h-[370px] px-2 md:px-8 py-8 gap-8 rounded-2xl flex flex-col justify-center items-center">
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
          <div className="bg-gradient-green-to-darkblue-color text-white text-center max-md:w-full w-[370px]  h-[370px] px-2 md:px-8 py-8 gap-8 rounded-2xl flex flex-col justify-center items-center">
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
          </div> */}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
