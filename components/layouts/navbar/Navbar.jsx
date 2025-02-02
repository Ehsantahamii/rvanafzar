import Image from "next/image"

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center md:my-[20px]">
      <div className="logo_navbar">
        <Image src="/img/logo.svg" width={100} height={100} className="w-[80px] md:w-[190px] h-[79px]" />
      </div>
      <div className="phone_navbar">
        <span className="text-[10px] md:text-[26px] font-bold">09542354468</span>
      </div>
    </div>
  )
}

export default Navbar