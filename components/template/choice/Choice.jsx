import Image from "next/image";
import "./Choice.css";
const Choice = () => {
  const dataChoise = [
    {
      id: 1,
      img: "/img/choice3.png",
      caption:
        "گاهی‌اوقات از تست‌های شخصیت شناسی در مراجع قانونی برای ارزیابی میزان خطر، صلاحیت و اختلافات مرتبط با حضانت کودک استفاده می‌کنند. مدرسه، مشاوره ازدواج، مشاوره روابط و آزمون استخدامی دیگر جاهایی هستند که می‌توان از این تست‌ها استفاده کرد.",
    },
    {
      id: 2,
      img: "/img/choice2.png",
      caption:
        "روانشناسان و روانپزشکان برای درک بهتر رفتار و افکار مراجعه‌کننده از تست شخصیت شناسی استفاده می‌کند. این تست‌ها می‌توانند به متخصص سلامت روان، اطلاعات ارزشمندی درباره شخصیت، رفتارها و واکنش‌های افراد در شرایط مختلف بدهند.",
    },
    {
      id: 3,
      img: "/img/choice1.png",
      caption:
        "برخی از تست‌ها به خودشناسی و انتخاب مسیر شغلی کمک می‌کنند، اما بعضی دیگر جنبه بالینی و تشخیص اختلالات روانی دارند. انتخاب آزمون شخصیت شناسی برای افراد عادی دشوار است؛ از همین‌رو توصیه می‌شود از مشاوران و متخصصان روانشناسی کمک بگیرید. ",
    },
  ];
  return (
    <div className="choice w-full mt-[61px]">
      {/* title choice */}
      <div className="title_choice flex justify-center items-center">
        <h1 className="text-[30px] md:text-[36px] text-[#303030]">دلایل انتخاب ما</h1>
      </div>
      {/* content choice */}
      <div className=" flex flex-col  gap-5 md:flex-wrap md:flex-row mt-8">
        {dataChoise.map((index) => (
          <div
            key={index.id}
            className="content_choice flex flex-col justify-center items-center w-[375px] h-[340px] m-auto max-md:w-[95%]"
          >
            <Image src={index.img} width={175} height={155} />
            <p className="text-justify text-[#fff] text-[16px] w-[336px] max-md:px-3  max-md:w-full mt-8">
              {index.caption}
            </p>
          </div>
        ))}
      </div>
      {/* caption choice */}
      <div className="caption_choice flex flex-col px-5 mt-[30px]">
        <div className="title_caption-choice">
          <h1 className="text-[22px] font-bold md:text-[36px] text-[#303030] text-justify ">
            مهارت‌هایی که تست شخصیت شناسی و تست روانشناسی شخصیت نمایان می‌کنند
          </h1>
        </div>
        <div className="content_caption-choice text-justify mt-10">
          <p className="text-[19px] md:text-[24px]">
            تست های شخصیت شناسی به‌همراه تست خودشناسی و تست روانشناسی می‌توانند
            میزان تسلط متقاضیان یک شغل را به مهارت‌ها و استعدادهای لازم برای
            استخدام در یک جایگاه شغلی و انطباق میزان مهارت متقاضی با
            نیازمندی‌های جایگاه شغلی را مشخص کنند.
          </p>
          <p className="text-[19px] md:text-[24px] mt-1">
            تصمیم‌گیری، مسئولیت‌پذیری، محاسبات پیچیده، کمال‌گرایی، پیروی از
            ساختار، مدیریت و رهبری، کمک‌رسانی و... بسیاری دیگر از مهارت‌ها و
            ویژگی‌های اخلاقی مختلف، از جمله خصوصیت‌ها و ویژگی‌هایی هستند که به
            کمک آزمون شخصیت شناسی (در قالب تست شخصیت شناسی شغلی یا تست شخصیت
            شناسی تصویری)، تست روانشناسی شخصیت و تست خودشناسی می‌توان در متقاضی
            یک شغل شناسایی کرد.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choice;
