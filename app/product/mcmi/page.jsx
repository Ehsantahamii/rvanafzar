import PriceFormat from "@/components/modules/price-format/PriceFormat";
import Link from "next/link";

export const metadata = {
  title: "روان افزار |   پرسشنامه بالینی چند محوری میلون",
  description: "  پرسشنامه بالینی چند محوری میلون",
};

const page = () => {
  return (
    <section className="flex flex-col  mx-auto lg:max-w-[90%] pt-8 gap-8 lg:gap-16 lg:flex-row lg:justify-between">
      <aside className="w-[90vw] mx-auto lg:w-1/4 flex flex-col items-center p-4 lg:h-screen lg:max-h-[480px] rounded-lg shadow text-center">
        <img
          src="/img/mcmi.jpg"
          alt=""
          className="w-[90%] my-4 max-w-[150px] h-[100px] mx-auto"
        />
        <h2>Million Clinical Multi axial Inventory (MCMI-III)</h2>
        <h3>پرسشنامه بالینی چند محوری میلون</h3>
        <div className="flex items-center justify-center gap-1 text-[1.2rem] py-2 my-4 bg-[#25a8acd5] text-center w-[170px] rounded-lg">
          {PriceFormat("480000")}
          <svg
            className="w-4 h-4 text-white"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 566.93 566.93"
          >
            <path d="M264.42,339.89a14.68,14.68,0,0,1,1.91-5.72c7.87-13.34,16.58-20,26.58-20.36h.24a21,21,0,0,1,14.35,5.79c6.7,6,10.11,14.92,10.11,26.62V350l-3.23,1.88a31.26,31.26,0,0,1-15.93,3.83,54,54,0,0,1-29.36-8.74l-12,46.11a18.61,18.61,0,0,0,2.09,1.56l.12.07c8.26,5.43,19.23,8.07,33.53,8.07.41,0,1-.06,1.56-.12.81-.08,1.73-.17,2.74-.18,15.93-.51,28.59-4.43,37.68-11.66A176.67,176.67,0,0,0,337,362.7v-1.47c0-22.93-3.94-42.57-11.71-58.38-8.1-17-18.61-25.22-32.14-25.22a29,29,0,0,0-18.41,6c-5.93,4.63-15.92,16.09-29.64,44.22-10.15,21.16-24.26,25.88-34.48,26-.26.06-.52.12-.78.16l-.66.12-.68,0a37.78,37.78,0,0,1-16.76-4.25l-3.44-1.84V207.92l-41.75,21.65c4.15,20.39,6.17,45.23,6.17,75.72v42.4c0,11,1.11,19.27,3.41,25.39l0,.1c6.36,17.83,24,26.53,53.9,26.6h.29c15.7-.11,28.68-10.07,39.67-30.45l12.28-22.75a18.82,18.82,0,0,0,2.11-6.69Z" />
            <path
              className="w-3 h-3 text-white"
              d="M551.35,334.14a110.1,110.1,0,0,0-16.59-57.86l-31,30.76c8.85,13.77,14.37,25.56,16.82,35.91l1.28,5.4-5.13,2.11c-5.61,2.31-13,3.43-22.5,3.43H480.92a9.16,9.16,0,0,1-2.27.3H462l-1-5.34c-3.31-18.22-9.39-33.7-18.06-46-10-14.2-21-21.1-33.55-21.1a27.12,27.12,0,0,0-8.84,1.44c-10.62,3.45-19.34,13.36-26.72,30.29a126.87,126.87,0,0,0-10.35,51.28c0,8.23,1.54,15.34,4.56,21.14,5.91,11.32,16.74,16.83,33.11,16.83,13.1,0,23.68-2.18,32.35-6.64l8.76-4.52.7,9.83c.31,4.36.31,7.82.31,9.89v4l-3.59,1.8c-5.34,2.67-10.87,5.44-16.45,7.61-17,6.63-38.32,10.05-65,10.42L353,452.4c7.67,6.47,12.91,10.33,17.16,12.67l.11.06c8.63,5,18.74,7.38,30.92,7.38,11.58,0,21.9-2.83,30.66-8.41,16.48-10.36,26.77-30.1,30.62-58.68l.76-5.64h21.29c20,0,36.89-3.32,50.35-9.89l3.36-6.06c8.7-17.7,13.1-33.92,13.1-48.21Zm-122.2,26.07a98.47,98.47,0,0,1-21.76,2.52,33.62,33.62,0,0,1-6-.37c-15.05-1.91-16.68-12.12-16.68-16.44a35.94,35.94,0,0,1,3.17-14.34l.06-.13c4.08-9,9.64-13.52,16.52-13.52a7.25,7.25,0,0,1,2.28.37c11.22,1.42,20.1,12.39,27.14,33.51l2.27,6.81Z"
            />
            <path d="M541.66,214.33a474.09,474.09,0,0,0-51.23,3.07c-5,11.19-9.1,20.88-12.55,29.41l5,4.24a301.11,301.11,0,0,1,57-5.26c3.62,0,6.78.09,9.56.18l1.25,0c3.56-7.31,5.36-13.9,5.36-19.62a16,16,0,0,0-1-5.56C553.84,218,551.11,214.33,541.66,214.33Z" />
            <path d="M42.62,412.81c-.29-1.62-7.13-40-3.89-89.6,4.39-67,25.42-122.63,60.82-160.86C147,111.07,218.89,90,313.16,99.76l-4.11,39.79c-81.08-8.38-141.69,8.43-180.15,50C57.65,266.47,81.73,404.26,82,405.65Z" />
            <path d="M52.92,114.21c-8.36,0-17.44.25-27.06.76a165.32,165.32,0,0,1,1.44,16.66c.56,9.58,1.24,21.21,3.18,30.18,7.42-.39,13.91-.57,20.17-.57,4.59,0,8.62.12,12.16.23l3.74.11C72,151,74.73,141.37,74.73,133a23.69,23.69,0,0,0-1.53-8.35C70.23,117.62,63.59,114.21,52.92,114.21Z" />
          </svg>
        </div>
      </aside>
      <div className="w-[90vw] mx-auto lg:w-3/4 p-8 lg:p-12 h-screen max-h-[480px] rounded-lg shadow">
        <h1 className="font-semibold text-3xl pb-2 max-md:text-[20px] border-b-[1px]">
          پرسشنامه بالینی چند محوری میلون
        </h1>
        <ul>
          <h3 className="text-2xl py-4">ویژگی های اختصاصی:</h3>
          <li className="list-disc">تعامل مقیاسها </li>
          <li className="list-disc">تفسیر پروفایل</li>
        </ul>
        <p className="py-4 text-red-400">
          *توجه : جهت دریافت هریک از آزمون ها با شماره ۰۹۵۴۲۳۵۴۴۶۸ تماس حاصل
          فرمایید.*
        </p>
      </div>
    </section>
  );
};

export default page;
