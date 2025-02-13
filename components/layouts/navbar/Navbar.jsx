"use client"

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center max-w-[90vw] mx-auto md:my-[20px]">
      <div className="logo_navbar">
        <img src="/img/logo.svg" width={100} height={100} className="w-[80px] md:w-[190px] h-[79px]" />
      </div>
      <div className="phone_navbar">
        <span className="text-[10px] md:text-[26px] font-bold">
          ۰۹۵۴۲۳۵۴۴۶۸
        </span>
      </div>
    </nav>
  )
}

export default Navbar