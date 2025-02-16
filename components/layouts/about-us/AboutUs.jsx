
const AboutUs = () => {
    return (
        <>
            <section className="flex my-12 flex-col items-center w-[90%] lg:flex-row mx-auto">
                <div className="w-[90%] lg:w-[50%] p-4">
                    <h2 className="text-[24px] lg:text-[32px] font-semibold">
                        چرا روان افزار؟
                    </h2>
                    <p className="text-base lg:text-lg text-justify">
                        درحال حاضر  موسسات و شرکت های زیادی با یا بدون دانش و تحصیلات مرتبط،  اقدام به طراحی و نشر نرم افزارهای روانشناختی کرده اند.ارزیابی کیفیت این نرم افزارها با کاربر آنهاست و قضاوتی در این مورد صورت نمی گیرد. موسسه روان افزار با چندین ویژگی متفاوت، محصولات خود را در معرض دید کاربران قرار داده، تا بتوانند با مقایسه انتخاب مناسبی داشته باشند:
                    </p>
                </div>
                <div className="w-[90%] lg:w-[50%] p-4">
                    <img src="/img/Psychology.svg" alt="psychology-vector" />
                </div>
            </section>
            <section className="flex my-12 flex-col-reverse items-center w-[90%] lg:flex-row mx-auto">
                <div className="w-[90%] lg:w-[50%] p-4 flex justify-center lg:justify-start">
                    <img className="w-[250px] lg:w-auto" src="/img/RAVAN-AFZAR.png" alt="psychology-vector" />
                </div>
                <div className="w-[90%] lg:w-[50%] p-4">
                    <h2 className="text-[24px] lg:text-[32px] font-semibold">
                        رویکرد آموزشی و پژوهشی
                    </h2>
                    <p className="text-base lg:text-lg text-justify">
                        در نرم افزارهای این موسسه، سعی شده است علاوه بر کارکرد عمومی نرم افزارها، مانند اجرا و نمره گذاری، ترسیم نیمرخ و نمودار، ذخیره و بازیابی پرونده ها و .... گامی فراتر گذاشته شود و نرم افزار جوابگوی اهداف پژوهشی و موقعیت های بالینی هم باشد. گزینه  دسته بندی ، این امکان را فراهم می سازد که کاربر بتواند آزمودنیهای خود را بر اساس نمرات مقیاسهای آزمون، با انعطاف بالا دسته بندی نموده و اسامی هر گروه را به تفکیک داشته باشد. یا در نرم افزار هوش هیجانی، علاوه بر تفسیر تمام مقیاسها، راهبردهای بهبود هم پیش بینی شده است که دستورالعمل هایی برای بهبود هوش هیجانی در نمرات متوسط و پایین ارائه می دهد. نمودار زوجی و ارزیابی پیشرفت درمان از دیگر قابلیت های پیش بینی شده هستند.

                    </p>
                </div>
            </section>
            <section className="flex my-12 flex-col justify-enter items-center w-[90%] lg:flex-row mx-auto">
                <div className="w-[90%] lg:w-[50%] p-4">
                    <h2 className="text-[24px] lg:text-[32px] font-semibold">
                        قیمت مناسب
                    </h2>
                    <p className="text-base lg:text-lg text-justify">
                        با وجود قابلیت و امکانات مذکور، قیمت نرم افزارهای این موسسه،  نسبت به سایر موسسات و شرکت ها مناسب تر و مقرون به صرفه تر است.
                    </p>
                </div>
                <div className="w-[90%] lg:w-[50%] p-4 flex justify-center lg:justify-end">
                    <img className="max-w-[200px] lg:max-w-[320px]" src="/img/PRICE-VECTOR.png" alt="price-vector" />
                </div>
            </section>
        </>
    );
};

export default AboutUs;