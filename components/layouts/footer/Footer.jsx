import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="footer border-t-4 border-[#25A7AC] mt-[30px]">
      <div className="content_footer flex items-center justify-center my-[18px]">
        <h1 className="text-[30px] text-[#C278FA]">طراحی شده توسط : </h1>
        <Link href="https://developmart.ir/">
          <Image
            src="/img/footer-Icon.svg"
            width={100}
            height={100}
            className="w-[150px] h-[50px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
